package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Nhan vien / nguoi dung cua cua hang. */
public class Users extends BaseResource {
    public Users(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/users - Danh sach nhan vien */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/users", params);
    }

}