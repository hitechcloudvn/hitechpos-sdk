package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Quan ly cua hang (shop) va cau hinh webhook. */
public class Shops extends BaseResource {
    public Shops(HttpClient http) { super(http); }

    /** GET /api/v1/shops - Danh sach cua hang */
    public Map<String, Object> list(Map<String, String> params) {
        return http.get("/api/v1/shops", params);
    }

    /** GET /api/v1/shops/{shop_id} - Chi tiet cua hang */
    public Map<String, Object> get(String shopId) {
        return http.get("/api/v1/shops/" + shopId);
    }

    /** PUT /api/v1/shops/{shop_id} - Cap nhat cua hang / webhook */
    public Map<String, Object> update(String shopId, Object body) {
        return http.put("/api/v1/shops/" + shopId, body);
    }

}