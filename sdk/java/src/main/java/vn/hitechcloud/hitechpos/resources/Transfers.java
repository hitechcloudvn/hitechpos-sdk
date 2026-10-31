package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Chuyen kho. */
public class Transfers extends BaseResource {
    public Transfers(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/transfers - Danh sach phieu chuyen kho */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/transfers", params);
    }

    /** GET /api/v1/shops/{shop_id}/transfers/{transfer_id} - Chi tiet phieu chuyen kho */
    public Map<String, Object> get(String shopId, String transferId) {
        return http.get("/api/v1/shops/" + shopId + "/transfers/" + transferId);
    }

    /** POST /api/v1/shops/{shop_id}/transfers/multi - Tao nhieu phieu chuyen kho */
    public Map<String, Object> createMulti(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/transfers/multi", body);
    }

    /** PUT /api/v1/shops/{shop_id}/transfers/{transfer_id} - Cap nhat phieu chuyen kho */
    public Map<String, Object> update(String shopId, String transferId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/transfers/" + transferId, body);
    }

    /** GET /api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id} - Lich su trang thai chuyen kho */
    public Map<String, Object> statusHistory(String shopId, String transferId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/transfers/get_status_history/" + transferId, params);
    }

}