<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Bao cao ban hang, ton kho, khach hang.
 */
class Analytics extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/analytics/sale - Bao cao doanh thu */
    public function sale(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/analytics/sale', $params);
    }

    /** GET /api/v1/shops/{shop_id}/analytics/get_list_formula - Danh sach cong thuc */
    public function listFormula(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/analytics/get_list_formula', $params);
    }

    /** GET /api/v1/shops/{shop_id}/analytics/get_analytic_fields - Danh sach truong phan tich */
    public function getAnalyticFields(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/analytics/get_analytic_fields', $params);
    }

    /** GET /api/v1/shops/{shop_id}/statistic_custom/folders - Thu muc thong ke tuy chinh */
    public function statisticFolders(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/statistic_custom/folders', $params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation - Phan tich ton theo bien the */
    public function inventoryByVariation(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/inventory_analytics/inventory_by_variation', $params);
    }

    /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product - Phan tich ton theo san pham */
    public function inventoryByProduct(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/inventory_analytics/inventory_by_product', $params);
    }

    /** GET /api/v1/shops/{shop_id}/customer_analytics/report - Bao cao khach hang */
    public function customerReport(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/customer_analytics/report', $params);
    }

}