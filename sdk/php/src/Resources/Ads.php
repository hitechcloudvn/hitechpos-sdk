<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Trinh quan ly quang cao.
 */
class Ads extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/ads_manager/ad_accounts - Danh sach tai khoan quang cao */
    public function adAccounts(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/ads_manager/ad_accounts', $params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/campaigns_v2 - Danh sach chien dich */
    public function campaigns(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/ads_manager/campaigns_v2', $params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/ad_sets_v2 - Danh sach nhom quang cao */
    public function adSets(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/ads_manager/ad_sets_v2', $params);
    }

    /** GET /api/v1/shops/{shop_id}/ads_manager/ads_v2 - Danh sach quang cao */
    public function ads(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/ads_manager/ads_v2', $params);
    }

}