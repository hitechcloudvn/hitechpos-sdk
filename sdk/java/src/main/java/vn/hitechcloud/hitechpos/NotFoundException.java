package vn.hitechcloud.hitechpos;

public class NotFoundException extends HiTechPosException {
    public NotFoundException(String message, int statusCode, Object data) {
        super(message, statusCode, data);
    }
}
