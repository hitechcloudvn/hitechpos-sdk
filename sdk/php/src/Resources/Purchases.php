<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Phieu nhap hang.
 */
class Purchases extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/purchases - Danh sach phieu nhap */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/purchases', $params);
    }

    /** GET /api/v1/shops/{shop_id}/purchases/{purchase_id} - Chi tiet phieu nhap */
    public function get(string $shopId, string $purchaseId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/purchases/' . $purchaseId);
    }

    /** POST /api/v1/shops/{shop_id}/purchases - Tao phieu nhap */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/purchases', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/purchases/{purchase_id} - Cap nhat phieu nhap */
    public function update(string $shopId, string $purchaseId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/purchases/' . $purchaseId, $data);
    }

    /** POST /api/v1/shops/{shop_id}/purchases/separate - Tach phieu nhap */
    public function separate(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/purchases/separate', $data);
    }

}