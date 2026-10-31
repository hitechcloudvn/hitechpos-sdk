"""Inventory resource (3 endpoints)."""

from .base import BaseResource


class InventoryResource(BaseResource):
    """Ton kho, lich su ton va lo."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/inventory - Ton kho theo kho/chi nhanh"""
        return self._http.get(f"/api/v1/shops/{shop_id}/inventory", params)

    def histories(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/inventory_histories - Lich su bien dong ton kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/inventory_histories", params)

    def list_lots(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/lots - Danh sach lo / han su dung"""
        return self._http.get(f"/api/v1/shops/{shop_id}/lots", params)
