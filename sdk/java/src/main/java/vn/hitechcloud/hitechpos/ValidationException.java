package vn.hitechcloud.hitechpos;

public class ValidationException extends HiTechPosException {
    public ValidationException(String message, int statusCode, Object data) {
        super(message, statusCode, data);
    }
}
