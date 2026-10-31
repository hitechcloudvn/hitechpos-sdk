package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Phieu nhap hang. */
public class Purchases extends BaseResource {
    public Purchases(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/purchases - Danh sach phieu nhap */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/purchases", params);
    }

    /** GET /api/v1/shops/{shop_id}/purchases/{purchase_id} - Chi tiet phieu nhap */
    public Map<String, Object> get(String shopId, String purchaseId) {
        return http.get("/api/v1/shops/" + shopId + "/purchases/" + purchaseId);
    }

    /** POST /api/v1/shops/{shop_id}/purchases - Tao phieu nhap */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/purchases", body);
    }

    /** PUT /api/v1/shops/{shop_id}/purchases/{purchase_id} - Cap nhat phieu nhap */
    public Map<String, Object> update(String shopId, String purchaseId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/purchases/" + purchaseId, body);
    }

    /** POST /api/v1/shops/{shop_id}/purchases/separate - Tach phieu nhap */
    public Map<String, Object> separate(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/purchases/separate", body);
    }

}