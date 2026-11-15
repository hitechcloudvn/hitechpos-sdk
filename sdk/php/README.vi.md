# HiTechPos PHP SDK

> [English](README.md) | **Tiếng Việt**

---

Bộ SDK PHP chính thức cho API bán hàng & POS [HiTechPos](https://pos.hitechcloud.vn).
Yêu cầu PHP 8.0+ và Guzzle 7.

## Cài đặt

```bash
composer require hitechcloudvn/hitechpos-sdk
```

## Bắt đầu nhanh

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

## Xử lý lỗi

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

Phản hồi `429` và `5xx` được tự động thử lại với exponential backoff.

## Webhooks

```php
use HiTechCloud\HiTechPos\Webhook;

$sig = $_SERVER['HTTP_X_HITECHPOS_SIGNATURE'] ?? '';
if (Webhook::verifySignature($secret, file_get_contents('php://input'), $sig)) {
    $event = Webhook::parseEvent(file_get_contents('php://input'));
}
```

## Nhóm tài nguyên

`shops`, `products`, `variations`, `categories`, `inventory`, `warehouses`, `orders`,
`purchases`, `exports`, `transfers`, `stocktakings`, `suppliers`, `customers`,
`promotions`, `transactions`, `analytics`, `ads`, `marketplace`, `einvoices`, `users`, `geo`.
Namespace: `HiTechCloud\HiTechPos`.

## Giấy phép

MIT
