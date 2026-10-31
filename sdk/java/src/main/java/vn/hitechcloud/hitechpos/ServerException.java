package vn.hitechcloud.hitechpos;

public class ServerException extends HiTechPosException {
    public ServerException(String message, int statusCode, Object data) {
        super(message, statusCode, data);
    }
}
