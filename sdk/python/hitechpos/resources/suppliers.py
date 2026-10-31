"""Suppliers resource (2 endpoints)."""

from .base import BaseResource


class SuppliersResource(BaseResource):
    """Nha cung cap."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/suppliers - Danh sach nha cung cap"""
        return self._http.get(f"/api/v1/shops/{shop_id}/suppliers", params)

    def list_simple(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/supplier - Danh sach nha cung cap (rut gon)"""
        return self._http.get(f"/api/v1/shops/{shop_id}/supplier", params)
