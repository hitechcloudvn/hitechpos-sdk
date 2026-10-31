"""Warehouses resource (3 endpoints)."""

from .base import BaseResource


class WarehousesResource(BaseResource):
    """Kho / chi nhanh."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/warehouses - Danh sach kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/warehouses", params)

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/warehouses - Tao kho"""
        return self._http.post(f"/api/v1/shops/{shop_id}/warehouses", data)

    def update(self, shop_id, warehouse_id, data):
        """PUT /api/v1/shops/{shop_id}/warehouses/{warehouse_id} - Cap nhat kho"""
        return self._http.put(f"/api/v1/shops/{shop_id}/warehouses/{warehouse_id}", data)
