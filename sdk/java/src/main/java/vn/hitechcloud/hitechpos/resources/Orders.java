package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Don hang, trang thai, van chuyen, nhan, nguon don. */
public class Orders extends BaseResource {
    public Orders(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/orders - Danh sach don hang */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders", params);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id} - Chi tiet don hang */
    public Map<String, Object> get(String shopId, String orderId) {
        return http.get("/api/v1/shops/" + shopId + "/orders/" + orderId);
    }

    /** POST /api/v1/shops/{shop_id}/orders - Tao don hang */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders", body);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/{order_id} - Cap nhat don hang */
    public Map<String, Object> update(String shopId, String orderId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/orders/" + orderId, body);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/{order_id}/status - Cap nhat trang thai don hang */
    public Map<String, Object> updateStatus(String shopId, String orderId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/orders/" + orderId + "/status", body);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id}/messages - Tin nhan cua don hang */
    public Map<String, Object> messages(String shopId, String orderId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders/" + orderId + "/messages", params);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id}/print - Du lieu in don hang */
    public Map<String, Object> print(String shopId, String orderId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders/" + orderId + "/print", params);
    }

    /** POST /api/v1/shops/{shop_id}/orders/get_tracking_url - Lay URL tra cuu van chuyen */
    public Map<String, Object> getTrackingUrl(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders/get_tracking_url", body);
    }

    /** POST /api/v1/shops/{shop_id}/orders/arrange_shipment - Dieu phoi giao hang */
    public Map<String, Object> arrangeShipment(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders/arrange_shipment", body);
    }

    /** POST /api/v1/shops/{shop_id}/orders/get_promotion_advance_active - Lay khuyen mai nang cao dang ap dung */
    public Map<String, Object> getPromotionAdvanceActive(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders/get_promotion_advance_active", body);
    }

    /** POST /api/v1/shops/{shop_id}/orders/{order_id}/trigger_call - Kich hoat goi tu dong */
    public Map<String, Object> triggerCall(String shopId, String orderId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders/" + orderId + "/trigger_call", body);
    }

    /** GET /api/v1/shops/{shop_id}/order_source - Danh sach nguon don */
    public Map<String, Object> listSources(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/order_source", params);
    }

    /** GET /api/v1/shops/{shop_id}/orders_returned - Danh sach don tra hang */
    public Map<String, Object> listReturned(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders_returned", params);
    }

    /** POST /api/v1/shops/{shop_id}/orders_returned - Tao don tra hang */
    public Map<String, Object> createReturned(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders_returned", body);
    }

    /** GET /api/v1/shops/{shop_id}/orders/tags - Danh sach nhan don */
    public Map<String, Object> listTags(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders/tags", params);
    }

    /** POST /api/v1/shops/{shop_id}/orders/tags - Tao nhan don */
    public Map<String, Object> createTag(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/orders/tags", body);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/tags/{tag_id} - Cap nhat nhan don */
    public Map<String, Object> updateTag(String shopId, String tagId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/orders/tags/" + tagId, body);
    }

    /** GET /api/v1/shops/{shop_id}/orders/tag_groups - Danh sach nhom nhan don */
    public Map<String, Object> listTagGroups(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/orders/tag_groups", params);
    }

    /** GET /api/v1/shops/{shop_id}/order_call_laters - Danh sach hen goi lai */
    public Map<String, Object> listCallLaters(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/order_call_laters", params);
    }

    /** POST /api/v1/shops/{shop_id}/order_call_laters - Tao hen goi lai */
    public Map<String, Object> createCallLater(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/order_call_laters", body);
    }

    /** GET /api/v1/shops/{shop_id}/partners - Danh sach doi tac van chuyen */
    public Map<String, Object> listPartners(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/partners", params);
    }

    /** GET /api/v1/shops/{shop_id}/projects - Danh sach du an */
    public Map<String, Object> listProjects(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/projects", params);
    }

}