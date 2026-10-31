<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Phieu xuat huy / xuat kho.
 */
class Exports extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/export - Danh sach phieu xuat */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/export', $params);
    }

    /** GET /api/v1/shops/{shop_id}/export/{export_id} - Chi tiet phieu xuat */
    public function get(string $shopId, string $exportId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/export/' . $exportId);
    }

    /** POST /api/v1/shops/{shop_id}/export - Tao phieu xuat */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/export', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/export/{export_id} - Cap nhat phieu xuat */
    public function update(string $shopId, string $exportId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/export/' . $exportId, $data);
    }

}