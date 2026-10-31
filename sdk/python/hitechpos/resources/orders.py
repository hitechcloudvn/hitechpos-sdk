"""Orders resource (22 endpoints)."""

from .base import BaseResource


class OrdersResource(BaseResource):
    """Don hang, trang thai, van chuyen, nhan, nguon don."""

    def list(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders - Danh sach don hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders", params)

    def get(self, shop_id, order_id):
        """GET /api/v1/shops/{shop_id}/orders/{order_id} - Chi tiet don hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders/{order_id}")

    def create(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders - Tao don hang"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders", data)

    def update(self, shop_id, order_id, data):
        """PUT /api/v1/shops/{shop_id}/orders/{order_id} - Cap nhat don hang"""
        return self._http.put(f"/api/v1/shops/{shop_id}/orders/{order_id}", data)

    def update_status(self, shop_id, order_id, data):
        """PUT /api/v1/shops/{shop_id}/orders/{order_id}/status - Cap nhat trang thai don hang"""
        return self._http.put(f"/api/v1/shops/{shop_id}/orders/{order_id}/status", data)

    def messages(self, shop_id, order_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders/{order_id}/messages - Tin nhan cua don hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders/{order_id}/messages", params)

    def print(self, shop_id, order_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders/{order_id}/print - Du lieu in don hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders/{order_id}/print", params)

    def get_tracking_url(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders/get_tracking_url - Lay URL tra cuu van chuyen"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders/get_tracking_url", data)

    def arrange_shipment(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders/arrange_shipment - Dieu phoi giao hang"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders/arrange_shipment", data)

    def get_promotion_advance_active(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders/get_promotion_advance_active - Lay khuyen mai nang cao dang ap dung"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders/get_promotion_advance_active", data)

    def trigger_call(self, shop_id, order_id, data):
        """POST /api/v1/shops/{shop_id}/orders/{order_id}/trigger_call - Kich hoat goi tu dong"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders/{order_id}/trigger_call", data)

    def list_sources(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/order_source - Danh sach nguon don"""
        return self._http.get(f"/api/v1/shops/{shop_id}/order_source", params)

    def list_returned(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders_returned - Danh sach don tra hang"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders_returned", params)

    def create_returned(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders_returned - Tao don tra hang"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders_returned", data)

    def list_tags(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders/tags - Danh sach nhan don"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders/tags", params)

    def create_tag(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/orders/tags - Tao nhan don"""
        return self._http.post(f"/api/v1/shops/{shop_id}/orders/tags", data)

    def update_tag(self, shop_id, tag_id, data):
        """PUT /api/v1/shops/{shop_id}/orders/tags/{tag_id} - Cap nhat nhan don"""
        return self._http.put(f"/api/v1/shops/{shop_id}/orders/tags/{tag_id}", data)

    def list_tag_groups(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/orders/tag_groups - Danh sach nhom nhan don"""
        return self._http.get(f"/api/v1/shops/{shop_id}/orders/tag_groups", params)

    def list_call_laters(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/order_call_laters - Danh sach hen goi lai"""
        return self._http.get(f"/api/v1/shops/{shop_id}/order_call_laters", params)

    def create_call_later(self, shop_id, data):
        """POST /api/v1/shops/{shop_id}/order_call_laters - Tao hen goi lai"""
        return self._http.post(f"/api/v1/shops/{shop_id}/order_call_laters", data)

    def list_partners(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/partners - Danh sach doi tac van chuyen"""
        return self._http.get(f"/api/v1/shops/{shop_id}/partners", params)

    def list_projects(self, shop_id, params=None):
        """GET /api/v1/shops/{shop_id}/projects - Danh sach du an"""
        return self._http.get(f"/api/v1/shops/{shop_id}/projects", params)
