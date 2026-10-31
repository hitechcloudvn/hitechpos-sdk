"""Transfers resource (5 endpoints)."""

from .base import BaseResource


class TransfersResource(BaseResource):
    """Chuyen kho."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/transfers - Danh sach phieu chuyen kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/transfers", params)

    def get(self, shop_id, transfer_id):
        """GET /api/v1/shops/{shop_id}/transfers/{transfer_id} - Chi tiet phieu chuyen kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/transfers/{transfer_id}")

    def create_multi(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/transfers/multi - Tao nhieu phieu chuyen kho"""
        return self._http.post(f"/api/v1/shops/{shop_id}/transfers/multi", data)

    def update(self, shop_id, transfer_id, data):
        """PUT /api/v1/shops/{shop_id}/transfers/{transfer_id} - Cap nhat phieu chuyen kho"""
        return self._http.put(f"/api/v1/shops/{shop_id}/transfers/{transfer_id}", data)

    def status_history(self, shop_id, transfer_id, params=None):
        """GET /api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id} - Lich su trang thai chuyen kho"""
        return self._http.get(f"/api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id}", params)
