"""Ads resource (4 endpoints)."""

from .base import BaseResource


class AdsResource(BaseResource):
    """Trinh quan ly quang cao."""

    def ad_accounts(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/ads_manager/ad_accounts - Danh sach tai khoan quang cao"""
        return self._http.get(f"/api/v1/shops/{shop_id}/ads_manager/ad_accounts", params)

    def campaigns(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/ads_manager/campaigns_v2 - Danh sach chien dich"""
        return self._http.get(f"/api/v1/shops/{shop_id}/ads_manager/campaigns_v2", params)

    def ad_sets(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/ads_manager/ad_sets_v2 - Danh sach nhom quang cao"""
        return self._http.get(f"/api/v1/shops/{shop_id}/ads_manager/ad_sets_v2", params)

    def ads(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/ads_manager/ads_v2 - Danh sach quang cao"""
        return self._http.get(f"/api/v1/shops/{shop_id}/ads_manager/ads_v2", params)
