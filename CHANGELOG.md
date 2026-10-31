# Changelog

All notable changes to the HiTechPos SDK are documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-01

### Added
- Initial multi-language release: Node.js/TypeScript, Python, PHP, Go, and Java.
- 116 methods across 21 resource groups covering the HiTechPos `/api/v1` surface:
  shops, products & variations, categories, inventory, warehouses, orders (incl.
  returns, tags, shipment & call-back), purchases, exports, transfers, stocktakings,
  suppliers, customers (levels, points, notes), promotions & vouchers, transactions,
  debt & reconciliation, analytics, ads manager, marketplace (Shopee/Lazada/TikTok),
  e-invoices, users, and geo.
- Unified client constructor (`token` / `base_url` / `timeout` / `max_retries`).
- Typed error hierarchy (authentication, authorization, not-found, validation,
  rate-limit, server) mapped from HTTP status codes.
- Automatic retry with exponential backoff for `429` and `5xx` responses.
- Pagination helpers (`page_number` / `page_size`).
- Webhook HMAC-SHA256 signature verification (`X-HitechPos-Signature`).
- `openapi.json` (OpenAPI 3.0) description of the API.
- Node.js MCP server exposing core read tools.
- Vietnamese documentation under `docs/`.
