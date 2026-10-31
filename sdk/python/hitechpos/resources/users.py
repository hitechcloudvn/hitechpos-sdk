"""Users resource (1 endpoints)."""

from .base import BaseResource


class UsersResource(BaseResource):
    """Nhan vien / nguoi dung cua cua hang."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/users - Danh sach nhan vien"""
        return self._http.get(f"/api/v1/shops/{shop_id}/users", params)
