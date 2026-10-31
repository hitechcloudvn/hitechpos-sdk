package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Khach hang, cap do, diem, ghi chu. */
public class Customers extends BaseResource {
    public Customers(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/customers - Danh sach khach hang */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/customers", params);
    }

    /** GET /api/v1/shops/{shop_id}/customers/{customer_id} - Chi tiet khach hang */
    public Map<String, Object> get(String shopId, String customerId) {
        return http.get("/api/v1/shops/" + shopId + "/customers/" + customerId);
    }

    /** POST /api/v1/shops/{shop_id}/customers - Tao khach hang */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/customers", body);
    }

    /** PUT /api/v1/shops/{shop_id}/customers/{customer_id} - Cap nhat khach hang */
    public Map<String, Object> update(String shopId, String customerId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/customers/" + customerId, body);
    }

    /** GET /api/v1/shops/{shop_id}/customers/point_logs - Lich su diem thuong */
    public Map<String, Object> pointLogs(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/customers/point_logs", params);
    }

    /** GET /api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes - Ghi chu khach hang */
    public Map<String, Object> loadNotes(String shopId, String customerId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/customers/" + customerId + "/load_customer_notes", params);
    }

    /** POST /api/v1/shops/{shop_id}/customers/{customer_id}/create_note - Tao ghi chu khach hang */
    public Map<String, Object> createNote(String shopId, String customerId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/customers/" + customerId + "/create_note", body);
    }

    /** GET /api/v1/shops/{shop_id}/customer_levels - Danh sach cap do khach hang */
    public Map<String, Object> listLevels(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/customer_levels", params);
    }

}