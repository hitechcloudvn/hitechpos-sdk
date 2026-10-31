<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Don hang, trang thai, van chuyen, nhan, nguon don.
 */
class Orders extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/orders - Danh sach don hang */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders', $params);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id} - Chi tiet don hang */
    public function get(string $shopId, string $orderId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders/' . $orderId);
    }

    /** POST /api/v1/shops/{shop_id}/orders - Tao don hang */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/{order_id} - Cap nhat don hang */
    public function update(string $shopId, string $orderId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/orders/' . $orderId, $data);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/{order_id}/status - Cap nhat trang thai don hang */
    public function updateStatus(string $shopId, string $orderId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/orders/' . $orderId . '/status', $data);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id}/messages - Tin nhan cua don hang */
    public function messages(string $shopId, string $orderId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders/' . $orderId . '/messages', $params);
    }

    /** GET /api/v1/shops/{shop_id}/orders/{order_id}/print - Du lieu in don hang */
    public function print(string $shopId, string $orderId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders/' . $orderId . '/print', $params);
    }

    /** POST /api/v1/shops/{shop_id}/orders/get_tracking_url - Lay URL tra cuu van chuyen */
    public function getTrackingUrl(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders/get_tracking_url', $data);
    }

    /** POST /api/v1/shops/{shop_id}/orders/arrange_shipment - Dieu phoi giao hang */
    public function arrangeShipment(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders/arrange_shipment', $data);
    }

    /** POST /api/v1/shops/{shop_id}/orders/get_promotion_advance_active - Lay khuyen mai nang cao dang ap dung */
    public function getPromotionAdvanceActive(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders/get_promotion_advance_active', $data);
    }

    /** POST /api/v1/shops/{shop_id}/orders/{order_id}/trigger_call - Kich hoat goi tu dong */
    public function triggerCall(string $shopId, string $orderId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders/' . $orderId . '/trigger_call', $data);
    }

    /** GET /api/v1/shops/{shop_id}/order_source - Danh sach nguon don */
    public function listSources(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/order_source', $params);
    }

    /** GET /api/v1/shops/{shop_id}/orders_returned - Danh sach don tra hang */
    public function listReturned(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders_returned', $params);
    }

    /** POST /api/v1/shops/{shop_id}/orders_returned - Tao don tra hang */
    public function createReturned(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders_returned', $data);
    }

    /** GET /api/v1/shops/{shop_id}/orders/tags - Danh sach nhan don */
    public function listTags(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders/tags', $params);
    }

    /** POST /api/v1/shops/{shop_id}/orders/tags - Tao nhan don */
    public function createTag(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/orders/tags', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/orders/tags/{tag_id} - Cap nhat nhan don */
    public function updateTag(string $shopId, string $tagId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/orders/tags/' . $tagId, $data);
    }

    /** GET /api/v1/shops/{shop_id}/orders/tag_groups - Danh sach nhom nhan don */
    public function listTagGroups(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/orders/tag_groups', $params);
    }

    /** GET /api/v1/shops/{shop_id}/order_call_laters - Danh sach hen goi lai */
    public function listCallLaters(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/order_call_laters', $params);
    }

    /** POST /api/v1/shops/{shop_id}/order_call_laters - Tao hen goi lai */
    public function createCallLater(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/order_call_laters', $data);
    }

    /** GET /api/v1/shops/{shop_id}/partners - Danh sach doi tac van chuyen */
    public function listPartners(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/partners', $params);
    }

    /** GET /api/v1/shops/{shop_id}/projects - Danh sach du an */
    public function listProjects(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/projects', $params);
    }

}