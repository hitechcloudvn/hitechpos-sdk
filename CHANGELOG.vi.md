# Nhật ký thay đổi

> [English](CHANGELOG.md) | **Tiếng Việt**

---

Mọi thay đổi đáng chú ý của HiTechPos SDK đều được ghi lại trong tệp này.
Dự án tuân theo [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-01

### Thêm
- Phát hành đa ngôn ngữ đầu tiên: Node.js/TypeScript, Python, PHP, Go và Java.
- 116 phương thức trên 21 nhóm tài nguyên phủ toàn bộ bề mặt `/api/v1` của HiTechPos:
  shops, products & variations, categories, inventory, warehouses, orders (gồm
  trả hàng, nhãn, vận chuyển & hẹn gọi lại), purchases, exports, transfers, stocktakings,
  suppliers, customers (cấp độ, điểm, ghi chú), promotions & vouchers, transactions,
  công nợ & đối soát, analytics, ads manager, marketplace (Shopee/Lazada/TikTok),
  hóa đơn điện tử, users và geo.
- Hàm khởi tạo client thống nhất (`token` / `base_url` / `timeout` / `max_retries`).
- Hệ thống ngoại lệ có kiểu (xác thực, phân quyền, không tìm thấy, kiểm tra dữ liệu,
  giới hạn tần suất, máy chủ) ánh xạ từ mã trạng thái HTTP.
- Tự động thử lại với exponential backoff cho phản hồi `429` và `5xx`.
- Hàm hỗ trợ phân trang (`page_number` / `page_size`).
- Kiểm chứng chữ ký webhook HMAC-SHA256 (`X-HitechPos-Signature`).
- `openapi.json` (OpenAPI 3.0) mô tả API.
- Node.js MCP server cung cấp các công cụ đọc cốt lõi.
- Tài liệu tiếng Việt trong `docs/`.
