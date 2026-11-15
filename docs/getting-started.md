# Bắt đầu nhanh với HiTechPos SDK

Hướng dẫn này giúp bạn kết nối HiTechPos API trong vài phút: tạo khoá, lấy ID cửa hàng, và gọi yêu cầu đầu tiên.

## 1. Tạo API Key

1. Đăng nhập cổng quản trị HiTechPos tại `https://pos.hitechcloud.vn`.
2. Vào **Cấu hình** → **API & Tích hợp** → **API Key**.
3. Nhấn **+ Tạo API Key mới**, đặt tên ứng dụng và chọn phạm vi cửa hàng.
4. Sao chép **API Key** (chỉ hiển thị một lần) và lưu vào biến môi trường.

> ⚠️ API Key có quyền đọc/ghi dữ liệu bán hàng. Không nhúng vào mã frontend và không commit lên kho mã công khai.

## 2. Cài đặt SDK

```bash
# Python
pip install hitechpos

# Node.js / TypeScript
npm install @hitechcloudvn/hitechpos-sdk

# PHP
composer require hitechcloudvn/hitechpos-sdk

# Go
go get github.com/hitechcloudvn/hitechpos-sdk/go

# Java (Maven)
# <dependency><groupId>vn.hitechcloud</groupId><artifactId>hitechpos-sdk</artifactId><version>1.0.0</version></dependency>
```

## 3. Khởi tạo client

```python
from hitechpos import HiTechPos

client = HiTechPos(token="YOUR_API_TOKEN")           # production
# client = HiTechPos(token="...", base_url=HiTechPos.SANDBOX_URL)  # sandbox
```

Tham số khởi tạo (giống nhau trên mọi SDK):

| Tham số | Mặc định | Ý nghĩa |
|---------|----------|---------|
| `token` | — | API token, gửi dưới dạng Bearer |
| `base_url` | `https://pos.hitechcloud.vn` | URL gốc (đổi sang sandbox khi test) |
| `timeout` | `30` | Thời gian chờ mỗi yêu cầu (giây) |
| `max_retries` | `3` | Số lần thử lại khi gặp `429` / `5xx` |

## 4. Lấy danh sách cửa hàng

Mọi tài nguyên nghiệp vụ đều thuộc về một cửa hàng và truy cập theo đường dẫn lồng `/api/v1/shops/{shop_id}/...`.

```python
shops = client.shops.list()
shop_id = shops["data"][0]["id"]
```

## 5. Liệt kê sản phẩm và tạo đơn hàng

```python
products = client.products.list(shop_id, params={"page_number": 1, "page_size": 20})

order = client.orders.create(shop_id, {
    "customer": {"name": "Nguyễn Văn A", "phone": "0900000000"},
    "items": [{"variation_id": "var_123", "quantity": 1, "price": 99000}],
    "warehouse_id": "wh_1",
})
```

## 6. Bước tiếp theo

- [Xác thực](authentication.md)
- [Tham chiếu API đầy đủ](api-reference.md)
- [Xử lý lỗi](error-handling.md)
- [Giới hạn tần suất](rate-limiting.md)
