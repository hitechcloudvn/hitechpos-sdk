"""HiTechPos webhook signature verification (HMAC-SHA256)."""

import hashlib
import hmac
import json as _json

SIGNATURE_HEADER = "X-HitechPos-Signature"
EVENT_HEADER = "X-HitechPos-Event"
DELIVERY_HEADER = "X-HitechPos-Delivery"


def compute_signature(secret: str, payload) -> str:
    """Compute the expected HMAC-SHA256 hex signature of a raw payload."""
    if isinstance(payload, (bytes, bytearray)):
        raw = bytes(payload)
    else:
        raw = payload.encode("utf-8")
    return hmac.new(secret.encode("utf-8"), raw, hashlib.sha256).hexdigest()


def verify_signature(secret: str, payload, signature: str) -> bool:
    """Constant-time compare an incoming X-HitechPos-Signature header."""
    expected = compute_signature(secret, payload)
    return hmac.compare_digest(expected, signature or "")


def parse_event(payload):
    """Verify is done separately; decode JSON payload into a dict."""
    if isinstance(payload, (bytes, bytearray)):
        payload = payload.decode("utf-8")
    return _json.loads(payload)
