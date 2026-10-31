<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Khach hang, cap do, diem, ghi chu.
 */
class Customers extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/customers - Danh sach khach hang */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customers', $params);
    }

    /** GET /api/v1/shops/{shop_id}/customers/{customer_id} - Chi tiet khach hang */
    public function get(string $shopId, string $customerId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customers/' . $customerId);
    }

    /** POST /api/v1/shops/{shop_id}/customers - Tao khach hang */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/customers', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/customers/{customer_id} - Cap nhat khach hang */
    public function update(string $shopId, string $customerId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/customers/' . $customerId, $data);
    }

    /** GET /api/v1/shops/{shop_id}/customers/point_logs - Lich su diem thuong */
    public function pointLogs(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customers/point_logs', $params);
    }

    /** GET /api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes - Ghi chu khach hang */
    public function loadNotes(string $shopId, string $customerId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customers/' . $customerId . '/load_customer_notes', $params);
    }

    /** POST /api/v1/shops/{shop_id}/customers/{customer_id}/create_note - Tao ghi chu khach hang */
    public function createNote(string $shopId, string $customerId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/customers/' . $customerId . '/create_note', $data);
    }

    /** GET /api/v1/shops/{shop_id}/customer_levels - Danh sach cap do khach hang */
    public function listLevels(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customer_levels', $params);
    }

}