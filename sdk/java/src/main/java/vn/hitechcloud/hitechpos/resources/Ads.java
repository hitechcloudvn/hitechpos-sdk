package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Trinh quan ly quang cao. */
public class Ads extends BaseResource {
    public Ads(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/ads_manager/ad_accounts - Danh sach tai khoan quang cao */
    public Map<String, Object> adAccounts(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/ads_manager/ad_accounts", params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/campaigns_v2 - Danh sach chien dich */
    public Map<String, Object> campaigns(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/ads_manager/campaigns_v2", params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/ad_sets_v2 - Danh sach nhom quang cao */
    public Map<String, Object> adSets(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/ads_manager/ad_sets_v2", params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/ads_v2 - Danh sach quang cao */
    public Map<String, Object> ads(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/ads_manager/ads_v2", params);
    }

}