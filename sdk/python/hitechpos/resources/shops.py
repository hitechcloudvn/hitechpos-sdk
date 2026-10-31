"""Shops resource (3 endpoints)."""

from .base import BaseResource


class ShopsResource(BaseResource):
    """Quan ly cua hang (shop) va cau hinh webhook."""

    def list(self, params=None):
        """GET /api/v1/shops - Danh sach cua hang"""
        return self._http.get("/api/v1/shops", params)

    def get(self, shop_id):
        """GET /api/v1/shops/{shop_id} - Chi tiet cua hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}")

    def update(self, shop_id, data):
        """PUT /api/v1/shops/{shop_id} - Cap nhat cua hang / webhook"""
        return self._http.put(f"/api/v1/shops/{shop_id}", data)
