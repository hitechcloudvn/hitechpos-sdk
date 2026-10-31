"""Transactions resource (7 endpoints)."""

from .base import BaseResource


class TransactionsResource(BaseResource):
    """So quy, cong no, doi soat, chi phi quang cao."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/transactions - Danh sach giao dich / phieu thu chi"""
        return self._http.get(f"/api/v1/shops/{shop_id}/transactions", params)

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/transactions - Tao phieu thu / chi"""
        return self._http.post(f"/api/v1/shops/{shop_id}/transactions", data)

    def create_adv_cost(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/adv_costs - Ghi nhan chi phi quang cao"""
        return self._http.post(f"/api/v1/shops/{shop_id}/adv_costs", data)

    def payment_histories(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/payment_accounts/get_payment_histories - Lich su thanh toan tai khoan"""
        return self._http.get(f"/api/v1/shops/{shop_id}/payment_accounts/get_payment_histories", params)

    def bank_payments(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/bank_payments - Giao dich ngan hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/bank_payments", params)

    def debt(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/debt - Cong no"""
        return self._http.get(f"/api/v1/shops/{shop_id}/debt", params)

    def reconciliations(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/reconciliations - Doi soat"""
        return self._http.get(f"/api/v1/shops/{shop_id}/reconciliations", params)
