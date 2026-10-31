"""Promotions resource (9 endpoints)."""

from .base import BaseResource


class PromotionsResource(BaseResource):
    """Khuyen mai, khuyen mai nang cao, voucher."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/promotions - Danh sach khuyen mai"""
        return self._http.get(f"/api/v1/shops/{shop_id}/promotions", params)

    def list_advance(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/promotion_advance - Danh sach khuyen mai nang cao"""
        return self._http.get(f"/api/v1/shops/{shop_id}/promotion_advance", params)

    def create_advance(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/promotion_advance - Tao khuyen mai nang cao"""
        return self._http.post(f"/api/v1/shops/{shop_id}/promotion_advance", data)

    def update_advance(self, shop_id, promotion_id, data):
        """PUT /api/v1/shops/{shop_id}/promotion_advance/{promotion_id} - Cap nhat khuyen mai nang cao"""
        return self._http.put(f"/api/v1/shops/{shop_id}/promotion_advance/{promotion_id}", data)

    def create_advance_multi(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/promotion_advance/create_multi - Tao nhieu khuyen mai nang cao"""
        return self._http.post(f"/api/v1/shops/{shop_id}/promotion_advance/create_multi", data)

    def delete_advance_multi(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/promotion_advance/delete_multi - Xoa nhieu khuyen mai nang cao"""
        return self._http.post(f"/api/v1/shops/{shop_id}/promotion_advance/delete_multi", data)

    def list_vouchers(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/vouchers - Danh sach voucher"""
        return self._http.get(f"/api/v1/shops/{shop_id}/vouchers", params)

    def get_voucher(self, shop_id, voucher_id):
        """GET /api/v1/shops/{shop_id}/vouchers/{voucher_id} - Chi tiet voucher"""
        return self._http.get(f"/api/v1/shops/{shop_id}/vouchers/{voucher_id}")

    def create_voucher(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/vouchers - Tao voucher"""
        return self._http.post(f"/api/v1/shops/{shop_id}/vouchers", data)
