"""Categories resource (2 endpoints)."""

from .base import BaseResource


class CategoriesResource(BaseResource):
    """Danh muc san pham."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/categories - Danh sach danh muc"""
        return self._http.get(f"/api/v1/shops/{shop_id}/categories", params)

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/categories - Tao danh muc"""
        return self._http.post(f"/api/v1/shops/{shop_id}/categories", data)
