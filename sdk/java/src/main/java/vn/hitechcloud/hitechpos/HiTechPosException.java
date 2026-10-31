package vn.hitechcloud.hitechpos;

public class HiTechPosException extends RuntimeException {
    private final int statusCode;
    private final Object data;

    public HiTechPosException(String message, int statusCode, Object data) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
    }

    public int getStatusCode() { return statusCode; }
    public Object getData() { return data; }
}
