<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Nhan vien / nguoi dung cua cua hang.
 */
class Users extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/users - Danh sach nhan vien */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/users', $params);
    }

}