"""Stocktakings resource (4 endpoints)."""

from .base import BaseResource


class StocktakingsResource(BaseResource):
    """Kiem kho."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/stocktakings - Danh sach phieu kiem kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/stocktakings", params)

    def get(self, shop_id, stocktaking_id):
        """GET /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Chi tiet phieu kiem kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/stocktakings - Tao phieu kiem kho"""
        return self._http.post(f"/api/v1/shops/{shop_id}/stocktakings", data)

    def update(self, shop_id, stocktaking_id, data):
        """PUT /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Cap nhat phieu kiem kho"""
        return self._http.put(f"/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}", data)
