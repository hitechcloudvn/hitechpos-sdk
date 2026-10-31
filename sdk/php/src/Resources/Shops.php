<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Quan ly cua hang (shop) va cau hinh webhook.
 */
class Shops extends BaseResource
{
    /** GET /api/v1/shops - Danh sach cua hang */
    public function list(?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops', $params);
    }

    /** GET /api/v1/shops/{shop_id} - Chi tiet cua hang */
    public function get(string $shopId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId);
    }

    /** PUT /api/v1/shops/{shop_id} - Cap nhat cua hang / webhook */
    public function update(string $shopId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId, $data);
    }

}