<?php

namespace HiTechCloud\HiTechPos\Resources;

use HiTechCloud\HiTechPos\HttpClient;

abstract class BaseResource
{
    protected HttpClient $http;

    public function __construct(HttpClient $http)
    {
        $this->http = $http;
    }
}
