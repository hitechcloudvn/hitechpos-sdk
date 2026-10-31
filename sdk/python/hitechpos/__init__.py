"""HiTechPos SDK for Python.

Official SDK for the HiTechPos sales/POS API (https://pos.hitechcloud.vn).
"""

__version__ = "1.0.0"

from .client import HiTechPos
from .exceptions import (
    HiTechPosError, AuthenticationError, AuthorizationError,
    NotFoundError, ValidationError, RateLimitError, ServerError,
)
from .webhook import verify_signature, compute_signature, parse_event

__all__ = [
    "HiTechPos", "HiTechPosError", "AuthenticationError",
    "AuthorizationError", "NotFoundError", "ValidationError",
    "RateLimitError", "ServerError",
    "verify_signature", "compute_signature", "parse_event",
]
