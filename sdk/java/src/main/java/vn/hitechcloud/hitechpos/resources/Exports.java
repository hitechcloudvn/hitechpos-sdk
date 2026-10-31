package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Phieu xuat huy / xuat kho. */
public class Exports extends BaseResource {
    public Exports(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/export - Danh sach phieu xuat */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/export", params);
    }

    /** GET /api/v1/shops/{shop_id}/export/{export_id} - Chi tiet phieu xuat */
    public Map<String, Object> get(String shopId, String exportId) {
        return http.get("/api/v1/shops/" + shopId + "/export/" + exportId);
    }

    /** POST /api/v1/shops/{shop_id}/export - Tao phieu xuat */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/export", body);
    }

    /** PUT /api/v1/shops/{shop_id}/export/{export_id} - Cap nhat phieu xuat */
    public Map<String, Object> update(String shopId, String exportId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/export/" + exportId, body);
    }

}