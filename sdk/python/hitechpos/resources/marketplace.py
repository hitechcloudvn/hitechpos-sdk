"""Marketplace resource (5 endpoints)."""

from .base import BaseResource


class MarketplaceResource(BaseResource):
    """San TMDT Shopee / Lazada / TikTok va livestream."""

    def get_account_info(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/marketplace/get_account_info - Thong tin tai khoan san"""
        return self._http.get(f"/api/v1/shops/{shop_id}/marketplace/get_account_info", params)

    def products(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/marketplace/products - San pham tren san"""
        return self._http.get(f"/api/v1/shops/{shop_id}/marketplace/products", params)

    def reverse_order(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/marketplace/reverse_order - Don hoan tren san"""
        return self._http.get(f"/api/v1/shops/{shop_id}/marketplace/reverse_order", params)

    def shopee_evaluate(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/shopee/evaluate - Danh gia Shopee"""
        return self._http.get(f"/api/v1/shops/{shop_id}/shopee/evaluate", params)

    def livestream(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/livestream_manager - Quan ly livestream"""
        return self._http.get(f"/api/v1/shops/{shop_id}/livestream_manager", params)
