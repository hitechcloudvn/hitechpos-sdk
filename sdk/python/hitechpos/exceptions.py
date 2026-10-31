"""HiTechPos SDK exceptions."""


class HiTechPosError(Exception):
    """Base error for the HiTechPos SDK."""

    def __init__(self, message, status_code=None, errors=None):
        self.message = message
        self.status_code = status_code
        self.errors = errors or []
        super().__init__(self.message)


class AuthenticationError(HiTechPosError):
    """401 - invalid or missing API token."""


class AuthorizationError(HiTechPosError):
    """403 - token lacks access to this shop/resource."""


class NotFoundError(HiTechPosError):
    """404 - resource not found."""


class ValidationError(HiTechPosError):
    """422 - request validation failed."""


class RateLimitError(HiTechPosError):
    """429 - rate limit exceeded."""

    def __init__(self, message, retry_after=None, **kwargs):
        super().__init__(message, **kwargs)
        self.retry_after = retry_after


class ServerError(HiTechPosError):
    """5xx - server side error."""


ERROR_MAP = {
    401: AuthenticationError,
    403: AuthorizationError,
    404: NotFoundError,
    422: ValidationError,
    429: RateLimitError,
    500: ServerError,
    502: ServerError,
    503: ServerError,
}
