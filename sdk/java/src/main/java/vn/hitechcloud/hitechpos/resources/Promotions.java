package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Khuyen mai, khuyen mai nang cao, voucher. */
public class Promotions extends BaseResource {
    public Promotions(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/promotions - Danh sach khuyen mai */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/promotions", params);
    }

    /** GET /api/v1/shops/{shop_id}/promotion_advance - Danh sach khuyen mai nang cao */
    public Map<String, Object> listAdvance(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/promotion_advance", params);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance - Tao khuyen mai nang cao */
    public Map<String, Object> createAdvance(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/promotion_advance", body);
    }

    /** PUT /api/v1/shops/{shop_id}/promotion_advance/{promotion_id} - Cap nhat khuyen mai nang cao */
    public Map<String, Object> updateAdvance(String shopId, String promotionId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/promotion_advance/" + promotionId, body);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance/create_multi - Tao nhieu khuyen mai nang cao */
    public Map<String, Object> createAdvanceMulti(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/promotion_advance/create_multi", body);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance/delete_multi - Xoa nhieu khuyen mai nang cao */
    public Map<String, Object> deleteAdvanceMulti(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/promotion_advance/delete_multi", body);
    }

    /** GET /api/v1/shops/{shop_id}/vouchers - Danh sach voucher */
    public Map<String, Object> listVouchers(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/vouchers", params);
    }

    /** GET /api/v1/shops/{shop_id}/vouchers/{voucher_id} - Chi tiet voucher */
    public Map<String, Object> getVoucher(String shopId, String voucherId) {
        return http.get("/api/v1/shops/" + shopId + "/vouchers/" + voucherId);
    }

    /** POST /api/v1/shops/{shop_id}/vouchers - Tao voucher */
    public Map<String, Object> createVoucher(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/vouchers", body);
    }

}