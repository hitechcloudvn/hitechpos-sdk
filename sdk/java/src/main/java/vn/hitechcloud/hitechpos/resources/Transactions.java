package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** So quy, cong no, doi soat, chi phi quang cao. */
public class Transactions extends BaseResource {
    public Transactions(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/transactions - Danh sach giao dich / phieu thu chi */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/transactions", params);
    }

    /** POST /api/v1/shops/{shop_id}/transactions - Tao phieu thu / chi */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/transactions", body);
    }

    /** POST /api/v1/shops/{shop_id}/adv_costs - Ghi nhan chi phi quang cao */
    public Map<String, Object> createAdvCost(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/adv_costs", body);
    }

    /** GET /api/v1/shops/{shop_id}/payment_accounts/get_payment_histories - Lich su thanh toan tai khoan */
    public Map<String, Object> paymentHistories(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/payment_accounts/get_payment_histories", params);
    }

    /** GET /api/v1/shops/{shop_id}/bank_payments - Giao dich ngan hang */
    public Map<String, Object> bankPayments(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/bank_payments", params);
    }

    /** GET /api/v1/shops/{shop_id}/debt - Cong no */
    public Map<String, Object> debt(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/debt", params);
    }

    /** GET /api/v1/shops/{shop_id}/reconciliations - Doi soat */
    public Map<String, Object> reconciliations(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/reconciliations", params);
    }

}