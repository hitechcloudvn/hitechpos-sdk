"""HiTechPos SDK - HTTP client with retry + typed errors."""

import json
import time
from typing import Any, Dict, Optional
from urllib.parse import urljoin

import requests

from .exceptions import HiTechPosError, RateLimitError, ERROR_MAP


class HTTPClient:
    """Low-level HTTP client for the HiTechPos API."""

    def __init__(self, base_url: str, token: Optional[str] = None,
                 timeout: int = 30, max_retries: int = 3):
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.max_retries = max_retries
        self.session = requests.Session()
        self.session.headers.update({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "HiTechPos-Python-SDK/%s" % "1.0.0",
        })
        if token:
            self.set_token(token)

    def set_token(self, token: str) -> None:
        self.session.headers["Authorization"] = "Bearer %s" % token

    def clear_token(self) -> None:
        self.session.headers.pop("Authorization", None)

    def request(self, method: str, path: str, params: Dict = None,
                json_data: Dict = None) -> Any:
        url = urljoin(self.base_url + "/", path.lstrip("/"))
        last_error = None
        for attempt in range(self.max_retries + 1):
            try:
                resp = self.session.request(
                    method=method, url=url, params=params,
                    json=json_data, timeout=self.timeout,
                )
                if resp.status_code == 429:
                    retry_after = int(resp.headers.get("Retry-After", 2 ** attempt))
                    if attempt < self.max_retries:
                        time.sleep(retry_after)
                        continue
                    raise RateLimitError("Rate limit exceeded", status_code=429,
                                         retry_after=retry_after)
                if resp.status_code >= 500 and attempt < self.max_retries:
                    time.sleep(2 ** attempt)
                    continue
                if resp.status_code >= 400:
                    self._raise_error(resp)
                if resp.status_code == 204 or not resp.content:
                    return None
                return resp.json()
            except (requests.ConnectionError, requests.Timeout) as e:
                last_error = e
                if attempt < self.max_retries:
                    time.sleep(2 ** attempt)
                    continue
                raise HiTechPosError("Request failed: %s" % e)
        if last_error:
            raise HiTechPosError("Request failed after retries: %s" % last_error)

    def _raise_error(self, resp: "requests.Response") -> None:
        try:
            body = resp.json()
            errors = body.get("error") or body.get("message") or body.get("errors")
            if isinstance(errors, str):
                errors = [errors]
            if not errors:
                errors = ["HTTP %d" % resp.status_code]
            message = "; ".join(str(e) for e in errors)
        except (json.JSONDecodeError, ValueError):
            message = "HTTP %d: %s" % (resp.status_code, resp.text[:200])
            errors = [message]
        error_class = ERROR_MAP.get(resp.status_code, HiTechPosError)
        kwargs = {"message": message, "status_code": resp.status_code, "errors": errors}
        if resp.status_code == 429:
            kwargs["retry_after"] = int(resp.headers.get("Retry-After", 60))
        raise error_class(**kwargs)

    def get(self, path, params=None):
        return self.request("GET", path, params=params)

    def post(self, path, data=None):
        return self.request("POST", path, json_data=data)

    def put(self, path, data=None):
        return self.request("PUT", path, json_data=data)

    def delete(self, path):
        return self.request("DELETE", path)

    def paginate(self, path, params=None):
        """Yield every item across pages (page_number / page_size)."""
        params = dict(params or {})
        params.setdefault("page_number", 1)
        params.setdefault("page_size", 50)
        while True:
            resp = self.get(path, params)
            data = resp.get("data", []) if isinstance(resp, dict) else []
            for item in data:
                yield item
            meta = (resp.get("meta") or {}).get("pagination", {}) if isinstance(resp, dict) else {}
            if not meta.get("has_more"):
                break
            params["page_number"] = meta.get("page_number", params["page_number"]) + 1

    def close(self):
        self.session.close()
