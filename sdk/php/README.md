# HiTechPos PHP SDK

> **English** | [Tiếng Việt](README.vi.md)

---

Official PHP SDK for the [HiTechPos](https://pos.hitechcloud.vn) sales & POS API.
Requires PHP 8.0+ and Guzzle 7.

## Installation

```bash
composer require hitechcloudvn/hitechpos-sdk
```

## Quick start

```php
use HiTechCloud\HiTechPos\HiTechPos;

$client = new HiTechPos('YOUR_API_TOKEN');

$shops = $client->shops->list();
$shopId = $shops['data'][0]['id'];

$products = $client->products->list($shopId, ['page_number' => 1, 'page_size' => 20]);

$order = $client->orders->create($shopId, [
    'customer' => ['name' => 'Nguyen Van A', 'phone' => '0900000000'],
    'items' => [['variation_id' => 'var_123', 'quantity' => 1, 'price' => 99000]],
    'warehouse_id' => 'wh_1',
]);
```

### Sandbox

```php
$client = new HiTechPos('...', HiTechPos::SANDBOX_URL);
```

## Error handling

```php
use HiTechCloud\HiTechPos\{HiTechPosException, NotFoundException, RateLimitException};

try {
    $client->orders->get($shopId, 'missing');
} catch (RateLimitException $e) {
    echo $e->getRetryAfter();
} catch (HiTechPosException $e) {
    echo $e->getCode() . ': ' . $e->getMessage();
}
```

`429` and `5xx` responses are retried automatically with exponential backoff.

## Webhooks

```php
use HiTechCloud\HiTechPos\Webhook;

$sig = $_SERVER['HTTP_X_HITECHPOS_SIGNATURE'] ?? '';
if (Webhook::verifySignature($secret, file_get_contents('php://input'), $sig)) {
    $event = Webhook::parseEvent(file_get_contents('php://input'));
}
```

## Resource groups

`shops`, `products`, `variations`, `categories`, `inventory`, `warehouses`, `orders`,
`purchases`, `exports`, `transfers`, `stocktakings`, `suppliers`, `customers`,
`promotions`, `transactions`, `analytics`, `ads`, `marketplace`, `einvoices`, `users`, `geo`.
Namespace: `HiTechCloud\HiTechPos`.

## License

MIT
