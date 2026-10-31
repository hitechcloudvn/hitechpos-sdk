<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Danh muc san pham.
 */
class Categories extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/categories - Danh sach danh muc */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/categories', $params);
    }

    /** POST /api/v1/shops/{shop_id}/categories - Tao danh muc */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/categories', $data);
    }

}