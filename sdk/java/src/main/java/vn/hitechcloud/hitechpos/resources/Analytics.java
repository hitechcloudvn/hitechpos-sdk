package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Bao cao ban hang, ton kho, khach hang. */
public class Analytics extends BaseResource {
    public Analytics(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/analytics/sale - Bao cao doanh thu */
    public Map<String, Object> sale(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/analytics/sale", params);
    }

    /** GET /api/v1/shops/{shop_id}/analytics/get_list_formula - Danh sach cong thuc */
    public Map<String, Object> listFormula(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/analytics/get_list_formula", params);
    }

    /** GET /api/v1/shops/{shop_id}/analytics/get_analytic_fields - Danh sach truong phan tich */
    public Map<String, Object> getAnalyticFields(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/analytics/get_analytic_fields", params);
    }

    /** GET /api/v1/shops/{shop_id}/statistic_custom/folders - Thu muc thong ke tuy chinh */
    public Map<String, Object> statisticFolders(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/statistic_custom/folders", params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation - Phan tich ton theo bien the */
    public Map<String, Object> inventoryByVariation(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/inventory_analytics/inventory_by_variation", params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product - Phan tich ton theo san pham */
    public Map<String, Object> inventoryByProduct(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/inventory_analytics/inventory_by_product", params);
    }

    /** GET /api/v1/shops/{shop_id}/customer_analytics/report - Bao cao khach hang */
    public Map<String, Object> customerReport(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/customer_analytics/report", params);
    }

}