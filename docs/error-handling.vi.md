# Xử lý lỗi

> [English](error-handling.md) | **Tiếng Việt**

---

Khi API trả về mã trạng thái `>= 400`, SDK sẽ ném (throw) một ngoại lệ có kiểu tương ứng thay vì trả về dữ liệu. Nhờ đó bạn có thể bắt đúng loại lỗi cần xử lý.

## Bảng ánh xạ lỗi

| HTTP | Lớp ngoại lệ | Ý nghĩa |
|------|--------------|---------|
| 401 | `AuthenticationError` | Token thiếu hoặc không hợp lệ |
| 403 | `AuthorizationError` | Token không có quyền với cửa hàng/tài nguyên này |
| 404 | `NotFoundError` | Không tìm thấy tài nguyên |
| 422 | `ValidationError` | Dữ liệu gửi lên không hợp lệ |
| 429 | `RateLimitError` | Vượt giới hạn tần suất (có `retry_after`) |
| 5xx | `ServerError` | Lỗi phía máy chủ |
| khác | `HiTechPosError` | Lỗi cơ sở / không xác định |

Tất cả lớp trên kế thừa từ `HiTechPosError` (Python/JS/PHP/Java) hoặc triển khai `error` với struct `HiTechPosError` (Go). Mỗi lỗi mang `status_code`/`statusCode`, thông điệp, và dữ liệu phản hồi gốc.

## Python

```python
from hitechpos import HiTechPosError, NotFoundError, ValidationError, RateLimitError

try:
    client.orders.get(shop_id, "khong_ton_tai")
except NotFoundError:
    ...
except ValidationError as e:
    print(e.errors)
except RateLimitError as e:
    print("thử lại sau", e.retry_after, "giây")
except HiTechPosError as e:
    print(e.status_code, e.message)
```

## Node.js / TypeScript

```ts
import { NotFoundError, RateLimitError, HiTechPosError } from "@hitechcloudvn/hitechpos-sdk";

try {
  await client.orders.get(shopId, "khong_ton_tai");
} catch (e) {
  if (e instanceof RateLimitError) console.log(e.retryAfter);
  else if (e instanceof HiTechPosError) console.log(e.statusCode, e.message);
}
```

## PHP

```php
use HiTechCloud\HiTechPos\{HiTechPosException, NotFoundException, RateLimitException};

try {
    $client->orders->get($shopId, 'khong_ton_tai');
} catch (RateLimitException $e) {
    echo $e->getRetryAfter();
} catch (HiTechPosException $e) {
    echo $e->getCode() . ': ' . $e->getMessage();
}
```

## Go

```go
_, err := client.Orders.Get("shop_123", "khong_ton_tai")
if nf, ok := err.(*hitechpos.NotFoundError); ok {
    fmt.Println("không tìm thấy:", nf.Message)
}
```

## Java

```java
try {
    client.orders().get(shopId, "khong_ton_tai");
} catch (RateLimitException e) {
    System.out.println(e.getRetryAfter());
} catch (HiTechPosException e) {
    System.out.println(e.getStatusCode());
}
```

## Cấu trúc lỗi trả về

```json
{
  "status": "error",
  "error": "Mô tả lỗi"
}
```

SDK đọc trường `error` (hoặc `message`) để dựng thông điệp của ngoại lệ.
