# Xác thực

> [English](authentication.md) | **Tiếng Việt**

---

HiTechPos API xác thực bằng **API token** gửi kèm trong mỗi yêu cầu dưới dạng Bearer Token.

## Header xác thực

```
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
Accept: application/json
```

SDK tự động gắn header này sau khi bạn truyền `token` vào client.

```python
from hitechpos import HiTechPos
client = HiTechPos(token="YOUR_API_TOKEN")
```

```ts
import { HiTechPos } from "@hitechcloudvn/hitechpos-sdk";
const client = new HiTechPos({ token: "YOUR_API_TOKEN" });
```

```php
$client = new HiTechCloud\HiTechPos\HiTechPos("YOUR_API_TOKEN");
```

```go
client := hitechpos.NewClient(hitechpos.WithToken("YOUR_API_TOKEN"))
```

```java
HiTechPos client = new HiTechPos("YOUR_API_TOKEN");
```

## Đổi token khi đang chạy

```python
client.set_token("NEW_TOKEN")
```

Tất cả SDK đều có `set_token` / `setToken` / `SetToken`.

## Phạm vi cửa hàng

Mỗi token được cấp quyền truy cập một hoặc nhiều cửa hàng. Dùng `client.shops.list()` để biết token của bạn truy cập được những cửa hàng nào, rồi dùng `shop_id` tương ứng cho các lời gọi tiếp theo.

## Môi trường

| Môi trường | Base URL |
|------------|----------|
| Production | `https://pos.hitechcloud.vn` |
| Sandbox | `https://pos-sandbox.hitechcloud.vn` |

Dữ liệu sandbox tách biệt hoàn toàn với production — dùng để thử đẩy đơn, trừ kho và nhận webhook mà không ảnh hưởng dữ liệu thật.

## Bảo mật khoá

- Không nhúng token vào mã frontend (JavaScript trình duyệt, mobile).
- Lưu token trong biến môi trường hoặc kho bí mật (secret manager).
- Thu hồi và cấp lại token ngay nếu nghi ngờ bị lộ.
