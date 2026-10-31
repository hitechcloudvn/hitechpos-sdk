"""Purchases resource (5 endpoints)."""

from .base import BaseResource


class PurchasesResource(BaseResource):
    """Phieu nhap hang."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/purchases - Danh sach phieu nhap"""
        return self._http.get(f"/api/v1/shops/{shop_id}/purchases", params)

    def get(self, shop_id, purchase_id):
        """GET /api/v1/shops/{shop_id}/purchases/{purchase_id} - Chi tiet phieu nhap"""
        return self._http.get(f"/api/v1/shops/{shop_id}/purchases/{purchase_id}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/purchases - Tao phieu nhap"""
        return self._http.post(f"/api/v1/shops/{shop_id}/purchases", data)

    def update(self, shop_id, purchase_id, data):
        """PUT /api/v1/shops/{shop_id}/purchases/{purchase_id} - Cap nhat phieu nhap"""
        return self._http.put(f"/api/v1/shops/{shop_id}/purchases/{purchase_id}", data)

    def separate(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/purchases/separate - Tach phieu nhap"""
        return self._http.post(f"/api/v1/shops/{shop_id}/purchases/separate", data)
