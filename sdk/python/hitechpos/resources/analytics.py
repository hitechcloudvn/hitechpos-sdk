"""Analytics resource (7 endpoints)."""

from .base import BaseResource


class AnalyticsResource(BaseResource):
    """Bao cao ban hang, ton kho, khach hang."""

    def sale(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/analytics/sale - Bao cao doanh thu"""
        return self._http.get(f"/api/v1/shops/{shop_id}/analytics/sale", params)

    def list_formula(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/analytics/get_list_formula - Danh sach cong thuc"""
        return self._http.get(f"/api/v1/shops/{shop_id}/analytics/get_list_formula", params)

    def get_analytic_fields(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/analytics/get_analytic_fields - Danh sach truong phan tich"""
        return self._http.get(f"/api/v1/shops/{shop_id}/analytics/get_analytic_fields", params)

    def statistic_folders(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/statistic_custom/folders - Thu muc thong ke tuy chinh"""
        return self._http.get(f"/api/v1/shops/{shop_id}/statistic_custom/folders", params)

    def inventory_by_variation(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation - Phan tich ton theo bien the"""
        return self._http.get(f"/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation", params)

    def inventory_by_product(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product - Phan tich ton theo san pham"""
        return self._http.get(f"/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product", params)

    def customer_report(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/customer_analytics/report - Bao cao khach hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/customer_analytics/report", params)
