package vn.hitechcloud.hitechpos;

public class AuthenticationException extends HiTechPosException {
    public AuthenticationException(String message, int statusCode, Object data) {
        super(message, statusCode, data);
    }
}
