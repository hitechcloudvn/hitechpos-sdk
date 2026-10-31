"""EInvoices resource (1 endpoints)."""

from .base import BaseResource


class EInvoicesResource(BaseResource):
    """Hoa don dien tu."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/list_einvoices - Danh sach hoa don dien tu"""
        return self._http.get(f"/api/v1/shops/{shop_id}/list_einvoices", params)
