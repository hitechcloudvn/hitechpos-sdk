package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** San TMDT Shopee / Lazada / TikTok va livestream. */
public class Marketplace extends BaseResource {
    public Marketplace(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/marketplace/get_account_info - Thong tin tai khoan san */
    public Map<String, Object> getAccountInfo(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/marketplace/get_account_info", params);
    }

    /** GET /api/v1/shops/{shop_id}/marketplace/products - San pham tren san */
    public Map<String, Object> products(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/marketplace/products", params);
    }

    /** GET /api/v1/shops/{shop_id}/marketplace/reverse_order - Don hoan tren san */
    public Map<String, Object> reverseOrder(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/marketplace/reverse_order", params);
    }

    /** GET /api/v1/shops/{shop_id}/shopee/evaluate - Danh gia Shopee */
    public Map<String, Object> shopeeEvaluate(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/shopee/evaluate", params);
    }

    /** GET /api/v1/shops/{shop_id}/livestream_manager - Quan ly livestream */
    public Map<String, Object> livestream(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/livestream_manager", params);
    }

}