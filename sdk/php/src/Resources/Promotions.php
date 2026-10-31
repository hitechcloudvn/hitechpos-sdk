<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Khuyen mai, khuyen mai nang cao, voucher.
 */
class Promotions extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/promotions - Danh sach khuyen mai */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/promotions', $params);
    }

    /** GET /api/v1/shops/{shop_id}/promotion_advance - Danh sach khuyen mai nang cao */
    public function listAdvance(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/promotion_advance', $params);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance - Tao khuyen mai nang cao */
    public function createAdvance(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/promotion_advance', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/promotion_advance/{promotion_id} - Cap nhat khuyen mai nang cao */
    public function updateAdvance(string $shopId, string $promotionId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/promotion_advance/' . $promotionId, $data);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance/create_multi - Tao nhieu khuyen mai nang cao */
    public function createAdvanceMulti(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/promotion_advance/create_multi', $data);
    }

    /** POST /api/v1/shops/{shop_id}/promotion_advance/delete_multi - Xoa nhieu khuyen mai nang cao */
    public function deleteAdvanceMulti(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/promotion_advance/delete_multi', $data);
    }

    /** GET /api/v1/shops/{shop_id}/vouchers - Danh sach voucher */
    public function listVouchers(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/vouchers', $params);
    }

    /** GET /api/v1/shops/{shop_id}/vouchers/{voucher_id} - Chi tiet voucher */
    public function getVoucher(string $shopId, string $voucherId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/vouchers/' . $voucherId);
    }

    /** POST /api/v1/shops/{shop_id}/vouchers - Tao voucher */
    public function createVoucher(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/vouchers', $data);
    }

}