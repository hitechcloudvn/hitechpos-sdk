<?php

namespace HiTechCloud\HiTechPos;

class HiTechPos
{
    public const PRODUCTION_URL = 'https://pos.hitechcloud.vn';
    public const SANDBOX_URL = 'https://pos-sandbox.hitechcloud.vn';

    private HttpClient $http;

    public Resources\Shops $shops;
    public Resources\Products $products;
    public Resources\Variations $variations;
    public Resources\Categories $categories;
    public Resources\Inventory $inventory;
    public Resources\Warehouses $warehouses;
    public Resources\Orders $orders;
    public Resources\Purchases $purchases;
    public Resources\Exports $exports;
    public Resources\Transfers $transfers;
    public Resources\Stocktakings $stocktakings;
    public Resources\Suppliers $suppliers;
    public Resources\Customers $customers;
    public Resources\Promotions $promotions;
    public Resources\Transactions $transactions;
    public Resources\Analytics $analytics;
    public Resources\Ads $ads;
    public Resources\Marketplace $marketplace;
    public Resources\EInvoices $einvoices;
    public Resources\Users $users;
    public Resources\Geo $geo;

    public function __construct(
        ?string $token = null,
        string $baseUrl = self::PRODUCTION_URL,
        int $timeout = 30,
        int $maxRetries = 3
    ) {
        $this->http = new HttpClient($baseUrl, $token, $timeout, $maxRetries);
        $this->shops = new Resources\Shops($this->http);
        $this->products = new Resources\Products($this->http);
        $this->variations = new Resources\Variations($this->http);
        $this->categories = new Resources\Categories($this->http);
        $this->inventory = new Resources\Inventory($this->http);
        $this->warehouses = new Resources\Warehouses($this->http);
        $this->orders = new Resources\Orders($this->http);
        $this->purchases = new Resources\Purchases($this->http);
        $this->exports = new Resources\Exports($this->http);
        $this->transfers = new Resources\Transfers($this->http);
        $this->stocktakings = new Resources\Stocktakings($this->http);
        $this->suppliers = new Resources\Suppliers($this->http);
        $this->customers = new Resources\Customers($this->http);
        $this->promotions = new Resources\Promotions($this->http);
        $this->transactions = new Resources\Transactions($this->http);
        $this->analytics = new Resources\Analytics($this->http);
        $this->ads = new Resources\Ads($this->http);
        $this->marketplace = new Resources\Marketplace($this->http);
        $this->einvoices = new Resources\EInvoices($this->http);
        $this->users = new Resources\Users($this->http);
        $this->geo = new Resources\Geo($this->http);
    }

    public function setToken(string $token): void
    {
        $this->http->setToken($token);
    }
}
