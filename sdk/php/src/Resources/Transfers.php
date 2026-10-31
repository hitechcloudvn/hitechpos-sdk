<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Chuyen kho.
 */
class Transfers extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/transfers - Danh sach phieu chuyen kho */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/transfers', $params);
    }

    /** GET /api/v1/shops/{shop_id}/transfers/{transfer_id} - Chi tiet phieu chuyen kho */
    public function get(string $shopId, string $transferId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/transfers/' . $transferId);
    }

    /** POST /api/v1/shops/{shop_id}/transfers/multi - Tao nhieu phieu chuyen kho */
    public function createMulti(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/transfers/multi', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/transfers/{transfer_id} - Cap nhat phieu chuyen kho */
    public function update(string $shopId, string $transferId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/transfers/' . $transferId, $data);
    }

    /** GET /api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id} - Lich su trang thai chuyen kho */
    public function statusHistory(string $shopId, string $transferId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/transfers/get_status_history/' . $transferId, $params);
    }

}