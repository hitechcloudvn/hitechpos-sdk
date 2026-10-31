"""Variations resource (3 endpoints)."""

from .base import BaseResource


class VariationsResource(BaseResource):
    """Bien the san pham va cap nhat ton kho."""

    def update_quantity(self, shop_id, variation_id, data):
        """POST /api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity - Cap nhat so luong ton cua 1 bien the"""
        return self._http.post(f"/api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity", data)

    def update_quantity_bulk(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/variations/update_quantity - Cap nhat so luong ton hang loat"""
        return self._http.post(f"/api/v1/shops/{shop_id}/variations/update_quantity", data)

    def update_composite_product(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/variations/update_composite_product - Cap nhat san pham dinh muc"""
        return self._http.post(f"/api/v1/shops/{shop_id}/variations/update_composite_product", data)
