<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Ton kho, lich su ton va lo.
 */
class Inventory extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/inventory - Ton kho theo kho/chi nhanh */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/inventory', $params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_histories - Lich su bien dong ton kho */
    public function histories(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/inventory_histories', $params);
    }

    /** GET /api/v1/shops/{shop_id}/lots - Danh sach lo / han su dung */
    public function listLots(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/lots', $params);
    }

}