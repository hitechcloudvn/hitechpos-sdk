# HiTechPos SDK

> [English](README.md) | **Tiếng Việt**

---

[![CI](https://github.com/hitechcloudvn/hitechpos-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/hitechcloudvn/hitechpos-sdk/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Bộ SDK đa ngôn ngữ chính thức cho [HiTechPos API](https://pos.hitechcloud.vn) —
> nền tảng bán hàng đa kênh và điểm bán (POS) của HiTechCloud.
> **116 phương thức trên 21 nhóm tài nguyên.**

HiTechPos cho phép bạn đồng bộ sản phẩm, đẩy đơn hàng, điều chỉnh tồn kho trên nhiều kho
theo thời gian thực, quản lý khách hàng và nhà cung cấp, chạy khuyến mãi, đối soát tiền
mặt và công nợ, đọc báo cáo phân tích, và kết nối sàn thương mại điện tử (Shopee / Lazada
/ TikTok Shop) — tất cả qua REST API gọn gàng với envelope JSON thống nhất.

## Ngôn ngữ hỗ trợ

| Ngôn ngữ | Gói | Thư mục |
|----------|---------|-----------|
| Node.js / TypeScript | `@hitechcloudvn/hitechpos-sdk` (npm) | [`sdk/nodejs`](sdk/nodejs) |
| Python | `hitechpos` (PyPI) | [`sdk/python`](sdk/python) |
| PHP | `hitechcloudvn/hitechpos-sdk` (Composer) | [`sdk/php`](sdk/php) |
| Go | `github.com/hitechcloudvn/hitechpos-sdk/go` | [`sdk/go`](sdk/go) |
| Java | `vn.hitechcloud:hitechpos-sdk` (Maven) | [`sdk/java`](sdk/java) |

Kèm theo: [MCP server](mcp) và [đặc tả OpenAPI 3.0](openapi.json).

## Cơ bản về API

- **Host:** `https://pos.hitechcloud.vn` (sandbox: `https://pos-sandbox.hitechcloud.vn`)
- **Base path:** `/api/v1`
- **Xác thực:** `Authorization: Bearer <API_TOKEN>`
- **Mô hình dữ liệu:** mọi tài nguyên nghiệp vụ đều thuộc về một cửa hàng:
  `/api/v1/shops/{shop_id}/...`. Một cửa hàng có một hoặc nhiều kho; tồn kho được
  theo dõi theo từng kho.
- **Envelope:** mọi phản hồi có dạng `{ "status", "data", "meta" }`.
- **Phân trang:** `page_number` / `page_size`; `meta.pagination.has_more` cho biết còn trang kế tiếp.

```json
{
  "status": "success",
  "data": [],
  "meta": {
    "pagination": { "total": 240, "page_size": 20, "page_number": 1, "total_pages": 12, "has_more": true }
  }
}
```

## Bắt đầu nhanh (Python)

```python
from hitechpos import HiTechPos

client = HiTechPos(token="YOUR_API_TOKEN")
shop_id = client.shops.list()["data"][0]["id"]
products = client.products.list(shop_id, params={"page_size": 20})
```

Xem README của từng SDK để biết cách dùng tương đương với Node, PHP, Go và Java, và
[`examples/`](examples) để xem các mẫu chạy được.

## Nhóm tài nguyên

| Tài nguyên | Phương thức | Mô tả |
|----------|---------|-------------|
| `shops` | 3 | Cửa hàng và cấu hình webhook |
| `products` | 15 | Sản phẩm, biến thể, danh mục phụ, combo, nhãn |
| `variations` | 3 | Cập nhật số lượng / sản phẩm biến thể tổng hợp |
| `categories` | 2 | Danh mục sản phẩm |
| `inventory` | 3 | Tồn kho, lịch sử tồn, lô |
| `warehouses` | 3 | Kho / chi nhánh |
| `orders` | 22 | Đơn hàng, trạng thái, vận chuyển, nhãn, nguồn đơn, trả hàng, hẹn gọi lại |
| `purchases` | 5 | Phiếu nhập hàng |
| `exports` | 4 | Phiếu xuất / xuất hủy |
| `transfers` | 5 | Chuyển kho giữa các kho |
| `stocktakings` | 4 | Kiểm kho |
| `suppliers` | 2 | Nhà cung cấp |
| `customers` | 8 | Khách hàng, cấp độ, điểm, ghi chú |
| `promotions` | 9 | Khuyến mãi, khuyến mãi nâng cao, voucher |
| `transactions` | 7 | Sổ quỹ, công nợ, đối soát, chi phí quảng cáo |
| `analytics` | 7 | Báo cáo bán hàng, tồn kho và khách hàng |
| `ads` | 4 | Trình quản lý quảng cáo |
| `marketplace` | 5 | Shopee / Lazada / TikTok + livestream |
| `einvoices` | 1 | Hóa đơn điện tử |
| `users` | 1 | Nhân viên cửa hàng |
| `geo` | 3 | Tỉnh / huyện / xã |

## Quy ước chung (mọi SDK)

- Hàm khởi tạo client: `token`, `base_url`, `timeout`, `max_retries`.
- Lỗi có kiểu: xác thực (401), phân quyền (403), không tìm thấy (404),
  kiểm tra dữ liệu (422), giới hạn tần suất (429), máy chủ (5xx).
- Tự động thử lại `429` và `5xx` với exponential backoff.
- Hàm hỗ trợ phân trang.
- Kiểm chứng chữ ký webhook HMAC-SHA256 (`X-HitechPos-Signature`).

## Webhooks

HiTechPos đẩy sự kiện từ `https://pos.hitechcloud.vn/webhook`. Mỗi lần gửi kèm
`X-HitechPos-Signature` (HMAC-SHA256 của nội dung thô, khóa bằng webhook secret của bạn),
`X-HitechPos-Event` và `X-HitechPos-Delivery` (khóa idempotency). Các sự kiện:
`order.created`, `order.updated`, `order.cancelled`, `stock.changed`, `stock.low`,
`product.created`, `product.updated`, `customer.created`. Hãy kiểm chứng mọi chữ ký
trước khi xử lý.

## Tài liệu

Tài liệu nằm trong [`docs/`](docs) (tiếng Anh và tiếng Việt): bắt đầu nhanh, xác thực,
tham chiếu API, xử lý lỗi và giới hạn tần suất.

## Giấy phép

MIT — xem [LICENSE](LICENSE).
