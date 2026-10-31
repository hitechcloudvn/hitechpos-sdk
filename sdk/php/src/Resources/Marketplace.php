<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * San TMDT Shopee / Lazada / TikTok va livestream.
 */
class Marketplace extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/marketplace/get_account_info - Thong tin tai khoan san */
    public function getAccountInfo(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/marketplace/get_account_info', $params);
    }

    /** GET /api/v1/shops/{shop_id}/marketplace/products - San pham tren san */
    public function products(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/marketplace/products', $params);
    }

    /** GET /api/v1/shops/{shop_id}/marketplace/reverse_order - Don hoan tren san */
    public function reverseOrder(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/marketplace/reverse_order', $params);
    }

    /** GET /api/v1/shops/{shop_id}/shopee/evaluate - Danh gia Shopee */
    public function shopeeEvaluate(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/shopee/evaluate', $params);
    }

    /** GET /api/v1/shops/{shop_id}/livestream_manager - Quan ly livestream */
    public function livestream(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/livestream_manager', $params);
    }

}