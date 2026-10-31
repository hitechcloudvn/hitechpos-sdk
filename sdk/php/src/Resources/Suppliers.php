<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Nha cung cap.
 */
class Suppliers extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/suppliers - Danh sach nha cung cap */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/suppliers', $params);
    }

    /** GET /api/v1/shops/{shop_id}/supplier - Danh sach nha cung cap (rut gon) */
    public function listSimple(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/supplier', $params);
    }

}