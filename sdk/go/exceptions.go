package hitechpos

import "fmt"

// HiTechPosError is the base error type.
type HiTechPosError struct {
	StatusCode int
	Message    string
	Data       map[string]interface{}
}

func (e *HiTechPosError) Error() string {
	return fmt.Sprintf("hitechpos: API error %d: %s", e.StatusCode, e.Message)
}

// AuthenticationError represents 401 errors.
type AuthenticationError struct{ HiTechPosError }

// AuthorizationError represents 403 errors.
type AuthorizationError struct{ HiTechPosError }

// NotFoundError represents 404 errors.
type NotFoundError struct{ HiTechPosError }

// ValidationError represents 422 errors.
type ValidationError struct{ HiTechPosError }

// RateLimitError represents 429 errors.
type RateLimitError struct {
	HiTechPosError
	RetryAfter int
}

// ServerError represents 5xx errors.
type ServerError struct{ HiTechPosError }

func mapError(statusCode int, data map[string]interface{}, retryAfter int) error {
	message := "API error"
	if msg, ok := data["error"].(string); ok {
		message = msg
	} else if msg, ok := data["message"].(string); ok {
		message = msg
	}
	base := HiTechPosError{StatusCode: statusCode, Message: message, Data: data}
	switch statusCode {
	case 401:
		return &AuthenticationError{base}
	case 403:
		return &AuthorizationError{base}
	case 404:
		return &NotFoundError{base}
	case 422:
		return &ValidationError{base}
	case 429:
		return &RateLimitError{HiTechPosError: base, RetryAfter: retryAfter}
	default:
		if statusCode >= 500 {
			return &ServerError{base}
		}
		return &base
	}
}
