# Giới hạn tần suất (Rate limiting)

> [English](rate-limiting.md) | **Tiếng Việt**

---

HiTechPos giới hạn số lượng yêu cầu trong một khoảng thời gian. Khi vượt ngưỡng, API trả về mã `429 Too Many Requests` kèm header `Retry-After` (số giây nên chờ trước khi thử lại).

## SDK tự động thử lại

Mỗi SDK tự động thử lại các phản hồi `429` và `5xx` theo cơ chế *exponential backoff*:

- Với `429`: chờ theo giá trị `Retry-After` (hoặc backoff luỹ thừa nếu không có header), rồi thử lại.
- Với `5xx` và lỗi kết nối: chờ `2^lần_thử` giây rồi thử lại.
- Số lần thử tối đa do `max_retries` quyết định (mặc định `3`). Sau khi hết lượt, SDK ném `RateLimitError` (hoặc `ServerError`).

```python
client = HiTechPos(token="...", max_retries=5)
```

```ts
const client = new HiTechPos({ token: "...", maxRetries: 5 });
```

```go
client := hitechpos.NewClient(hitechpos.WithToken("..."), hitechpos.WithMaxRetries(5))
```

## Bắt lỗi khi hết lượt thử

```python
from hitechpos import RateLimitError

try:
    client.products.list(shop_id)
except RateLimitError as e:
    print("Bị giới hạn, thử lại sau", e.retry_after, "giây")
```

## Thực hành tốt

- **Phân trang hợp lý:** dùng `page_size` vừa phải (ví dụ 20–100) thay vì kéo toàn bộ dữ liệu một lần.
- **Dùng webhook** thay cho hỏi vòng (polling) liên tục để nhận thay đổi gần như tức thời.
- **Dùng `updated_since`** (khi endpoint hỗ trợ) để chỉ lấy dữ liệu thay đổi gần đây.
- **Tôn trọng `Retry-After`** — không thử lại gấp hơn giá trị máy chủ yêu cầu.
- **Gộp thao tác** qua các endpoint hàng loạt (ví dụ `transfers/multi`, `promotion_advance/create_multi`) khi có thể.
