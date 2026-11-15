# HiTechPos Node.js / TypeScript SDK

> [English](README.md) | **Tiếng Việt**

---

Bộ SDK TypeScript chính thức cho API bán hàng & POS [HiTechPos](https://pos.hitechcloud.vn).

## Cài đặt

```bash
npm install @hitechcloudvn/hitechpos-sdk
```

## Bắt đầu nhanh

```ts
import { HiTechPos } from "@hitechcloudvn/hitechpos-sdk";

const client = new HiTechPos({ token: "YOUR_API_TOKEN" });

const shops = (await client.shops.list()) as { data: Array<{ id: string }> };
const shopId = shops.data[0].id;

const products = await client.products.list(shopId, { page_number: 1, page_size: 20 });

const order = await client.orders.create(shopId, {
  customer: { name: "Nguyen Van A", phone: "0900000000" },
  items: [{ variation_id: "var_123", quantity: 1, price: 99000 }],
  warehouse_id: "wh_1",
});
```

### Sandbox

```ts
import { HiTechPos, SANDBOX_URL } from "@hitechcloudvn/hitechpos-sdk";
const client = new HiTechPos({ token: "...", baseUrl: SANDBOX_URL });
```

## Phân trang

```ts
for await (const product of client["http"].paginate(`/api/v1/shops/${shopId}/products`)) {
  console.log(product);
}
```

(hoặc gọi từng phương thức danh sách với `{ page_number, page_size }`.)

## Xử lý lỗi

```ts
import { NotFoundError, RateLimitError, HiTechPosError } from "@hitechcloudvn/hitechpos-sdk";

try {
  await client.orders.get(shopId, "missing");
} catch (e) {
  if (e instanceof RateLimitError) console.log("retry after", e.retryAfter);
  else if (e instanceof HiTechPosError) console.log(e.statusCode, e.message);
}
```

Phản hồi `429` và `5xx` được tự động thử lại với exponential backoff.

## Webhooks

```ts
import { verifySignature, parseEvent } from "@hitechcloudvn/hitechpos-sdk";

if (verifySignature(secret, rawBody, req.headers["x-hitechpos-signature"] as string)) {
  const event = parseEvent(rawBody);
}
```

## Nhóm tài nguyên

`shops`, `products`, `variations`, `categories`, `inventory`, `warehouses`, `orders`,
`purchases`, `exports`, `transfers`, `stocktakings`, `suppliers`, `customers`,
`promotions`, `transactions`, `analytics`, `ads`, `marketplace`, `einvoices`, `users`, `geo`
— tổng cộng 116 phương thức.

## Giấy phép

MIT
