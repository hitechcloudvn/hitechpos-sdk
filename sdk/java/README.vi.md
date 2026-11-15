# HiTechPos Java SDK

> [English](README.md) | **Tiếng Việt**

---

Bộ SDK Java chính thức cho API bán hàng & POS [HiTechPos](https://pos.hitechcloud.vn).

## Cài đặt

### Maven

```xml
<dependency>
    <groupId>vn.hitechcloud</groupId>
    <artifactId>hitechpos-sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Gradle

```groovy
implementation 'vn.hitechcloud:hitechpos-sdk:1.0.0'
```

## Bắt đầu nhanh

```java
import vn.hitechcloud.hitechpos.HiTechPos;

import java.util.List;
import java.util.Map;

HiTechPos client = new HiTechPos("YOUR_API_TOKEN");

Map<String, Object> shops = client.shops().list(null);

Map<String, Object> products = client.products().list("shop_123", Map.of(
        "page_number", "1",
        "page_size", "20"
));

Map<String, Object> order = client.orders().create("shop_123", Map.of(
        "customer", Map.of("name", "Nguyen Van A", "phone", "0900000000"),
        "warehouse_id", "wh_1",
        "items", List.of(Map.of("variation_id", "var_123", "quantity", 1, "price", 99000))
));
```

### Sandbox / cấu hình tùy chỉnh

```java
HiTechPos client = new HiTechPos("...", HiTechPos.SANDBOX_URL, 45, 5);
```

## Xử lý lỗi

```java
import vn.hitechcloud.hitechpos.*;

try {
    client.orders().get("shop_123", "missing");
} catch (RateLimitException e) {
    System.out.println(e.getRetryAfter());
} catch (HiTechPosException e) {
    System.out.println(e.getStatusCode() + ": " + e.getMessage());
}
```

Phản hồi `429` và `5xx` được tự động thử lại với exponential backoff.

## Webhooks

```java
import vn.hitechcloud.hitechpos.Webhook;

if (Webhook.verifySignature(secret, rawBody, signatureHeader)) {
    Map<String, Object> event = Webhook.parseEvent(rawBody);
}
```

## Tài nguyên

`client.shops()`, `client.products()`, `client.variations()`, `client.categories()`,
`client.inventory()`, `client.warehouses()`, `client.orders()`, `client.purchases()`,
`client.exports()`, `client.transfers()`, `client.stocktakings()`, `client.suppliers()`,
`client.customers()`, `client.promotions()`, `client.transactions()`, `client.analytics()`,
`client.ads()`, `client.marketplace()`, `client.einvoices()`, `client.users()`, `client.geo()`.

## Giấy phép

MIT
