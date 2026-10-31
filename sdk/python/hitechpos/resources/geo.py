"""Geo resource (3 endpoints)."""

from .base import BaseResource


class GeoResource(BaseResource):
    """Dia gioi hanh chinh (tinh / huyen / xa)."""

    def provinces(self, params=None):
        """GET /api/v1/geo/provinces - Danh sach tinh / thanh"""
        return self._http.get("/api/v1/geo/provinces", params)

    def districts(self, params=None):
        """GET /api/v1/geo/districts - Danh sach quan / huyen"""
        return self._http.get("/api/v1/geo/districts", params)

    def communes(self, params=None):
        """GET /api/v1/geo/communes - Danh sach phuong / xa"""
        return self._http.get("/api/v1/geo/communes", params)
