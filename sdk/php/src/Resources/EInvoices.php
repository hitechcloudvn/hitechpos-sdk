<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Hoa don dien tu.
 */
class EInvoices extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/list_einvoices - Danh sach hoa don dien tu */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/list_einvoices', $params);
    }

}