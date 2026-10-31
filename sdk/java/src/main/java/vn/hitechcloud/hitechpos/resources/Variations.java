package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Bien the san pham va cap nhat ton kho. */
public class Variations extends BaseResource {
    public Variations(HttpClient http) { super(http); }

    /** POST /api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity - Cap nhat so luong ton cua 1 bien the */
    public Map<String, Object> updateQuantity(String shopId, String variationId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/variations/" + variationId + "/update_quantity", body);
    }

    /** POST /api/v1/shops/{shop_id}/variations/update_quantity - Cap nhat so luong ton hang loat */
    public Map<String, Object> updateQuantityBulk(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/variations/update_quantity", body);
    }

    /** POST /api/v1/shops/{shop_id}/variations/update_composite_product - Cap nhat san pham dinh muc */
    public Map<String, Object> updateCompositeProduct(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/variations/update_composite_product", body);
    }

}