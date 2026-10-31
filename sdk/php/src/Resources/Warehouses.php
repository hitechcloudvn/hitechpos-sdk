<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Kho / chi nhanh.
 */
class Warehouses extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/warehouses - Danh sach kho */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/warehouses', $params);
    }

    /** POST /api/v1/shops/{shop_id}/warehouses - Tao kho */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/warehouses', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/warehouses/{warehouse_id} - Cap nhat kho */
    public function update(string $shopId, string $warehouseId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/warehouses/' . $warehouseId, $data);
    }

}