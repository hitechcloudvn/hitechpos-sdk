<?php

require __DIR__ . '/../../sdk/php/vendor/autoload.php';

use HiTechCloud\HiTechPos\HiTechPos;
use HiTechCloud\HiTechPos\HiTechPosException;
use HiTechCloud\HiTechPos\Webhook;

$client = new HiTechPos(getenv('HITECHPOS_API_TOKEN'));

// 1. List accessible shops. / Liệt kê cửa hàng có thể truy cập.
$shops = $client->shops->list();
$shopId = $shops['data'][0]['id'];
echo "Shop: {$shopId}\n";

// 2. List products (single page). / Liệt kê sản phẩm (một trang).
$products = $client->products->list($shopId, ['page_number' => 1, 'page_size' => 20]);
echo 'Products on page 1: ' . count($products['data']) . "\n";

// 3. Create an order. / Tạo một đơn hàng.
try {
    $order = $client->orders->create($shopId, [
        'customer' => ['name' => 'Nguyen Van A', 'phone' => '0900000000'],
        'items' => [['variation_id' => 'var_123', 'quantity' => 2, 'price' => 150000]],
        'warehouse_id' => 'wh_1',
    ]);
    echo 'Created order: ' . $order['data']['id'] . "\n";
} catch (HiTechPosException $e) {
    echo 'API error: ' . $e->getCode() . ' ' . $e->getMessage() . "\n";
}

// 4. Verify a webhook signature inside your receiver. / Kiểm tra chữ ký webhook trong endpoint nhận webhook.
$secret = getenv('HITECHPOS_WEBHOOK_SECRET') ?: '';
$rawBody = '{"event":"order.created"}';
$signature = $_SERVER['HTTP_X_HITECHPOS_SIGNATURE'] ?? '';
if (Webhook::verifySignature($secret, $rawBody, $signature)) {
    echo "Webhook signature OK\n";
}
