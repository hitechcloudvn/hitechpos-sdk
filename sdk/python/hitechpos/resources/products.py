"""Products resource (15 endpoints)."""

from .base import BaseResource


class ProductsResource(BaseResource):
    """San pham, bien the, danh muc phu, combo, nhan."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/products - Danh sach san pham"""
        return self._http.get(f"/api/v1/shops/{shop_id}/products", params)

    def get(self, shop_id, product_id):
        """GET /api/v1/shops/{shop_id}/products/{product_id} - Chi tiet san pham"""
        return self._http.get(f"/api/v1/shops/{shop_id}/products/{product_id}")

    def get_by_sku(self, shop_id, product_sku):
        """GET /api/v1/shops/{shop_id}/products/{product_sku} - Chi tiet san pham theo SKU"""
        return self._http.get(f"/api/v1/shops/{shop_id}/products/{product_sku}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/products - Tao san pham"""
        return self._http.post(f"/api/v1/shops/{shop_id}/products", data)

    def update(self, shop_id, product_id, data):
        """PUT /api/v1/shops/{shop_id}/products/{product_id} - Cap nhat san pham"""
        return self._http.put(f"/api/v1/shops/{shop_id}/products/{product_id}", data)

    def update_hide(self, shop_id, data):
        """PUT /api/v1/shops/{shop_id}/products/update_hide - An/hien san pham hang loat"""
        return self._http.put(f"/api/v1/shops/{shop_id}/products/update_hide", data)

    def list_variations(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/products/variations - Danh sach bien the"""
        return self._http.get(f"/api/v1/shops/{shop_id}/products/variations", params)

    def get_logistics_shipping_document(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/products/get_logistics_shipping_document - Lay chung tu van chuyen"""
        return self._http.post(f"/api/v1/shops/{shop_id}/products/get_logistics_shipping_document", data)

    def list_materials(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/materials_products - Danh sach nguyen vat lieu"""
        return self._http.get(f"/api/v1/shops/{shop_id}/materials_products", params)

    def get_measure(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/product_measurements/get_measure - Lay don vi do luong"""
        return self._http.get(f"/api/v1/shops/{shop_id}/product_measurements/get_measure", params)

    def list_brands(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/brand - Danh sach thuong hieu"""
        return self._http.get(f"/api/v1/shops/{shop_id}/brand", params)

    def list_tags(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/tags_products - Danh sach nhan san pham"""
        return self._http.get(f"/api/v1/shops/{shop_id}/tags_products", params)

    def create_tag(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/tags_products - Tao nhan san pham"""
        return self._http.post(f"/api/v1/shops/{shop_id}/tags_products", data)

    def list_combos(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/combo_products - Danh sach san pham combo"""
        return self._http.get(f"/api/v1/shops/{shop_id}/combo_products", params)

    def create_combo(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/combo_products - Tao san pham combo"""
        return self._http.post(f"/api/v1/shops/{shop_id}/combo_products", data)
