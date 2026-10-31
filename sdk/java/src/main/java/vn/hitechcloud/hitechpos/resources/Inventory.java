package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Ton kho, lich su ton va lo. */
public class Inventory extends BaseResource {
    public Inventory(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/inventory - Ton kho theo kho/chi nhanh */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/inventory", params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_histories - Lich su bien dong ton kho */
    public Map<String, Object> histories(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/inventory_histories", params);
    }

    /** GET /api/v1/shops/{shop_id}/lots - Danh sach lo / han su dung */
    public Map<String, Object> listLots(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/lots", params);
    }

}