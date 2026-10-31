package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Kiem kho. */
public class Stocktakings extends BaseResource {
    public Stocktakings(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/stocktakings - Danh sach phieu kiem kho */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/stocktakings", params);
    }

    /** GET /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Chi tiet phieu kiem kho */
    public Map<String, Object> get(String shopId, String stocktakingId) {
        return http.get("/api/v1/shops/" + shopId + "/stocktakings/" + stocktakingId);
    }

    /** POST /api/v1/shops/{shop_id}/stocktakings - Tao phieu kiem kho */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/stocktakings", body);
    }

    /** PUT /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Cap nhat phieu kiem kho */
    public Map<String, Object> update(String shopId, String stocktakingId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/stocktakings/" + stocktakingId, body);
    }

}