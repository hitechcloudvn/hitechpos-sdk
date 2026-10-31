package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Danh muc san pham. */
public class Categories extends BaseResource {
    public Categories(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/categories - Danh sach danh muc */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/categories", params);
    }

    /** POST /api/v1/shops/{shop_id}/categories - Tao danh muc */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/categories", body);
    }

}