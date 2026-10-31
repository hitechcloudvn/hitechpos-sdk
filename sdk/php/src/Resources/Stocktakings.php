<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Kiem kho.
 */
class Stocktakings extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/stocktakings - Danh sach phieu kiem kho */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/stocktakings', $params);
    }

    /** GET /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Chi tiet phieu kiem kho */
    public function get(string $shopId, string $stocktakingId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/stocktakings/' . $stocktakingId);
    }

    /** POST /api/v1/shops/{shop_id}/stocktakings - Tao phieu kiem kho */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/stocktakings', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Cap nhat phieu kiem kho */
    public function update(string $shopId, string $stocktakingId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/stocktakings/' . $stocktakingId, $data);
    }

}