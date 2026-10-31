"""Base resource."""


class BaseResource:
    """Base class for HiTechPos resource groups."""

    def __init__(self, http_client):
        self._http = http_client
