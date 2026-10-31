<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Dia gioi hanh chinh (tinh / huyen / xa).
 */
class Geo extends BaseResource
{
    /** GET /api/v1/geo/provinces - Danh sach tinh / thanh */
    public function provinces(?array $params = null): ?array
    {
        return $this->http->get('/api/v1/geo/provinces', $params);
    }

    /** GET /api/v1/geo/districts - Danh sach quan / huyen */
    public function districts(?array $params = null): ?array
    {
        return $this->http->get('/api/v1/geo/districts', $params);
    }

    /** GET /api/v1/geo/communes - Danh sach phuong / xa */
    public function communes(?array $params = null): ?array
    {
        return $this->http->get('/api/v1/geo/communes', $params);
    }

}