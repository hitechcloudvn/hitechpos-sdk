package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Hoa don dien tu. */
public class EInvoices extends BaseResource {
    public EInvoices(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/list_einvoices - Danh sach hoa don dien tu */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/list_einvoices", params);
    }

}