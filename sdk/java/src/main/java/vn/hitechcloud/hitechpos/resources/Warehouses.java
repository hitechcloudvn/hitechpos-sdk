package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Kho / chi nhanh. */
public class Warehouses extends BaseResource {
    public Warehouses(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/warehouses - Danh sach kho */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/warehouses", params);
    }

    /** POST /api/v1/shops/{shop_id}/warehouses - Tao kho */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/warehouses", body);
    }

    /** PUT /api/v1/shops/{shop_id}/warehouses/{warehouse_id} - Cap nhat kho */
    public Map<String, Object> update(String shopId, String warehouseId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/warehouses/" + warehouseId, body);
    }

}