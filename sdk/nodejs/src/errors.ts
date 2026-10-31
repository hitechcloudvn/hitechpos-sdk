export class HiTechPosError extends Error {
  statusCode?: number;
  errors?: unknown;
  constructor(message: string, statusCode?: number, errors?: unknown) {
    super(message);
    this.name = "HiTechPosError";
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export class AuthenticationError extends HiTechPosError {
  constructor(message = "Authentication failed", errors?: unknown) {
    super(message, 401, errors);
    this.name = "AuthenticationError";
  }
}

export class AuthorizationError extends HiTechPosError {
  constructor(message = "Access denied", errors?: unknown) {
    super(message, 403, errors);
    this.name = "AuthorizationError";
  }
}

export class NotFoundError extends HiTechPosError {
  constructor(message = "Resource not found", errors?: unknown) {
    super(message, 404, errors);
    this.name = "NotFoundError";
  }
}

export class ValidationError extends HiTechPosError {
  constructor(message = "Validation error", errors?: unknown) {
    super(message, 422, errors);
    this.name = "ValidationError";
  }
}

export class RateLimitError extends HiTechPosError {
  retryAfter: number;
  constructor(message = "Rate limit exceeded", retryAfter = 60, errors?: unknown) {
    super(message, 429, errors);
    this.name = "RateLimitError";
    this.retryAfter = retryAfter;
  }
}

export class ServerError extends HiTechPosError {
  constructor(message = "Server error", statusCode = 500, errors?: unknown) {
    super(message, statusCode, errors);
    this.name = "ServerError";
  }
}
