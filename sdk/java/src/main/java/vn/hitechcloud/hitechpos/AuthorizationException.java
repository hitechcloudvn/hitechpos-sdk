package vn.hitechcloud.hitechpos;

public class AuthorizationException extends HiTechPosException {
    public AuthorizationException(String message, int statusCode, Object data) {
        super(message, statusCode, data);
    }
}
