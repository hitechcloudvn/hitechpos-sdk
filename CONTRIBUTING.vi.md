# Đóng góp cho HiTechPos SDK

> [English](CONTRIBUTING.md) | **Tiếng Việt**

---

Cảm ơn bạn đã giúp cải thiện bộ SDK chính thức của HiTechPos. Kho mã nguồn này chứa SDK
cho năm ngôn ngữ đều hướng tới cùng một bề mặt `/api/v1`, vì vậy các thay đổi cần
nhất quán trên mọi ngôn ngữ.

## Bố cục kho mã nguồn

```
sdk/nodejs    TypeScript SDK  (@hitechcloudvn/hitechpos-sdk)
sdk/python    Python SDK      (hitechpos)
sdk/php       PHP SDK         (hitechcloudvn/hitechpos-sdk)
sdk/go        Go SDK          (github.com/hitechcloudvn/hitechpos-sdk/go)
sdk/java      Java SDK        (vn.hitechcloud:hitechpos-sdk)
mcp           Node MCP server
docs          Bilingual documentation (EN + VI)
examples      Per-language usage examples
openapi.json  OpenAPI 3.0 specification
```

## Hướng dẫn

1. **Giữ tính song song.** Khi bạn thêm hoặc sửa endpoint, hãy cập nhật mọi SDK và
   `openapi.json`. Mỗi phương thức công khai tương ứng đúng một endpoint thật.
2. **Quy ước.** Client nhận `token`, `base_url`, `timeout` và `max_retries`.
   Lỗi có kiểu. `429`/`5xx` được thử lại với backoff.
   Danh sách dùng `page_number` / `page_size`.
3. **Không thay đổi phá vỡ tương thích** nếu không tăng major version.

## Chạy kiểm tra cục bộ

```bash
# Python
python -m py_compile sdk/python/hitechpos/**/*.py

# Node (type-check)
cd sdk/nodejs && npm install && npm run build

# PHP
for f in sdk/php/src/**/*.php; do php -l "$f"; done

# Go
cd sdk/go && gofmt -l . && go build ./...

# Java
cd sdk/java && mvn -q compile
```

## Báo lỗi

Mở issue tại
<https://github.com/hitechcloudvn/hitechpos-sdk/issues> kèm theo ngôn ngữ,
phiên bản SDK, cách tái hiện tối thiểu, và request/response (hãy che token của bạn).

## Giấy phép

Khi đóng góp, bạn đồng ý tác phẩm của mình được phát hành theo giấy phép MIT.
