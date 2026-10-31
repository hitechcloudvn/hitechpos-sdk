"""Exports resource (4 endpoints)."""

from .base import BaseResource


class ExportsResource(BaseResource):
    """Phieu xuat huy / xuat kho."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/export - Danh sach phieu xuat"""
        return self._http.get(f"/api/v1/shops/{shop_id}/export", params)

    def get(self, shop_id, export_id):
        """GET /api/v1/shops/{shop_id}/export/{export_id} - Chi tiet phieu xuat"""
        return self._http.get(f"/api/v1/shops/{shop_id}/export/{export_id}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/export - Tao phieu xuat"""
        return self._http.post(f"/api/v1/shops/{shop_id}/export", data)

    def update(self, shop_id, export_id, data):
        """PUT /api/v1/shops/{shop_id}/export/{export_id} - Cap nhat phieu xuat"""
        return self._http.put(f"/api/v1/shops/{shop_id}/export/{export_id}", data)
