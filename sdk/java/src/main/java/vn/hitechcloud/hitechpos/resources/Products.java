package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** San pham, bien the, danh muc phu, combo, nhan. */
public class Products extends BaseResource {
    public Products(HttpClient http) { super(http); }

    /** GET /api/v1/shops/{shop_id}/products - Danh sach san pham */
    public Map<String, Object> list(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/products", params);
    }

    /** GET /api/v1/shops/{shop_id}/products/{product_id} - Chi tiet san pham */
    public Map<String, Object> get(String shopId, String productId) {
        return http.get("/api/v1/shops/" + shopId + "/products/" + productId);
    }

    /** GET /api/v1/shops/{shop_id}/products/{product_sku} - Chi tiet san pham theo SKU */
    public Map<String, Object> getBySku(String shopId, String productSku) {
        return http.get("/api/v1/shops/" + shopId + "/products/" + productSku);
    }

    /** POST /api/v1/shops/{shop_id}/products - Tao san pham */
    public Map<String, Object> create(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/products", body);
    }

    /** PUT /api/v1/shops/{shop_id}/products/{product_id} - Cap nhat san pham */
    public Map<String, Object> update(String shopId, String productId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/products/" + productId, body);
    }

    /** PUT /api/v1/shops/{shop_id}/products/update_hide - An/hien san pham hang loat */
    public Map<String, Object> updateHide(String shopId, Object body) {
        return http.put("/api/v1/shops/" + shopId + "/products/update_hide", body);
    }

    /** GET /api/v1/shops/{shop_id}/products/variations - Danh sach bien the */
    public Map<String, Object> listVariations(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/products/variations", params);
    }

    /** POST /api/v1/shops/{shop_id}/products/get_logistics_shipping_document - Lay chung tu van chuyen */
    public Map<String, Object> getLogisticsShippingDocument(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/products/get_logistics_shipping_document", body);
    }

    /** GET /api/v1/shops/{shop_id}/materials_products - Danh sach nguyen vat lieu */
    public Map<String, Object> listMaterials(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/materials_products", params);
    }

    /** GET /api/v1/shops/{shop_id}/product_measurements/get_measure - Lay don vi do luong */
    public Map<String, Object> getMeasure(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/product_measurements/get_measure", params);
    }

    /** GET /api/v1/shops/{shop_id}/brand - Danh sach thuong hieu */
    public Map<String, Object> listBrands(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/brand", params);
    }

    /** GET /api/v1/shops/{shop_id}/tags_products - Danh sach nhan san pham */
    public Map<String, Object> listTags(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/tags_products", params);
    }

    /** POST /api/v1/shops/{shop_id}/tags_products - Tao nhan san pham */
    public Map<String, Object> createTag(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/tags_products", body);
    }

    /** GET /api/v1/shops/{shop_id}/combo_products - Danh sach san pham combo */
    public Map<String, Object> listCombos(String shopId, Map<String, String> params) {
        return http.get("/api/v1/shops/" + shopId + "/combo_products", params);
    }

    /** POST /api/v1/shops/{shop_id}/combo_products - Tao san pham combo */
    public Map<String, Object> createCombo(String shopId, Object body) {
        return http.post("/api/v1/shops/" + shopId + "/combo_products", body);
    }

}