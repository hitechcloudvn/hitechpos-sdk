package vn.hitechcloud.hitechpos;

public class RateLimitException extends HiTechPosException {
    private final int retryAfter;

    public RateLimitException(String message, int statusCode, Object data, int retryAfter) {
        super(message, statusCode, data);
        this.retryAfter = retryAfter;
    }

    public int getRetryAfter() { return retryAfter; }
}
