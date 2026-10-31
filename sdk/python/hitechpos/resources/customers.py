"""Customers resource (8 endpoints)."""

from .base import BaseResource


class CustomersResource(BaseResource):
    """Khach hang, cap do, diem, ghi chu."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/customers - Danh sach khach hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customers", params)

    def get(self, shop_id, customer_id):
        """GET /api/v1/shops/{shop_id}/customers/{customer_id} - Chi tiet khach hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customers/{customer_id}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/customers - Tao khach hang"""
        return self._http.post(f"/api/v1/shops/{shop_id}/customers", data)

    def update(self, shop_id, customer_id, data):
        """PUT /api/v1/shops/{shop_id}/customers/{customer_id} - Cap nhat khach hang"""
        return self._http.put(f"/api/v1/shops/{shop_id}/customers/{customer_id}", data)

    def point_logs(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/customers/point_logs - Lich su diem thuong"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customers/point_logs", params)

    def load_notes(self, shop_id, customer_id, params=None):
        """GET /api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes - Ghi chu khach hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes", params)

    def create_note(self, shop_id, customer_id, data):
        """POST /api/v1/shops/{shop_id}/customers/{customer_id}/create_note - Tao ghi chu khach hang"""
        return self._http.post(f"/api/v1/shops/{shop_id}/customers/{customer_id}/create_note", data)

    def list_levels(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/customer_levels - Danh sach cap do khach hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customer_levels", params)
