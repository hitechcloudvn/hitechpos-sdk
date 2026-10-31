package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Nha cung cap. */
public class Suppliers extends BaseResource {
    public Suppliers(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/suppliers - Danh sach nha cung cap */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/suppliers", params);
    }

    /** GET /api/v1/shops/{shop_id}/supplier - Danh sach nha cung cap (rut gon) */
    public Map<String, Object> listSimple(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/supplier", params);
    }

}