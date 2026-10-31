# HiTechPos SDK

> Official multi-language SDK for the [HiTechPos API](https://pos.hitechcloud.vn) —
> the multi-channel sales & point-of-sale platform by HiTechCloud.
> **116 methods across 21 resource groups.**

HiTechPos lets you sync products, push orders, adjust inventory across warehouses in
real time, manage customers and suppliers, run promotions, reconcile cash and debt,
read analytics, and connect marketplaces (Shopee / Lazada / TikTok Shop) — all over a
clean REST API with a unified JSON envelope.

## Supported languages

| Language | Package | Directory |
|----------|---------|-----------|
| Node.js / TypeScript | `@hitechcloud-vietnam/hitechpos-sdk` (npm) | [`sdk/nodejs`](sdk/nodejs) |
| Python | `hitechpos` (PyPI) | [`sdk/python`](sdk/python) |
| PHP | `hitechcloud-vietnam/hitechpos-sdk` (Composer) | [`sdk/php`](sdk/php) |
| Go | `github.com/hitechcloud-vietnam/hitechpos-sdk/go` | [`sdk/go`](sdk/go) |
| Java | `vn.hitechcloud:hitechpos-sdk` (Maven) | [`sdk/java`](sdk/java) |

Also included: an [MCP server](mcp) and an [OpenAPI 3.0 spec](openapi.json).

## API basics

- **Host:** `https://pos.hitechcloud.vn` (sandbox: `https://pos-sandbox.hitechcloud.vn`)
- **Base path:** `/api/v1`
- **Auth:** `Authorization: Bearer <API_TOKEN>`
- **Data model:** every business resource lives under a shop:
  `/api/v1/shops/{shop_id}/...`. A shop has one or more warehouses; inventory is
  tracked per warehouse.
- **Envelope:** every response is `{ "status", "data", "meta" }`.
- **Pagination:** `page_number` / `page_size`; `meta.pagination.has_more` signals more pages.

```json
{
  "status": "success",
  "data": [],
  "meta": {
    "pagination": { "total": 240, "page_size": 20, "page_number": 1, "total_pages": 12, "has_more": true }
  }
}
```

## Quick start (Python)

```python
from hitechpos import HiTechPos

client = HiTechPos(token="YOUR_API_TOKEN")
shop_id = client.shops.list()["data"][0]["id"]
products = client.products.list(shop_id, params={"page_size": 20})
```

See each SDK's README for the equivalent in Node, PHP, Go and Java, and
[`examples/`](examples) for runnable samples.

## Resource groups

| Resource | Methods | Description |
|----------|---------|-------------|
| `shops` | 3 | Shops and webhook config |
| `products` | 15 | Products, variations, sub-categories, combos, tags |
| `variations` | 3 | Variation quantity / composite updates |
| `categories` | 2 | Product categories |
| `inventory` | 3 | Stock, stock history, lots |
| `warehouses` | 3 | Warehouses / branches |
| `orders` | 22 | Orders, status, shipment, tags, sources, returns, call-backs |
| `purchases` | 5 | Purchase (goods-in) slips |
| `exports` | 4 | Export / write-off slips |
| `transfers` | 5 | Stock transfers between warehouses |
| `stocktakings` | 4 | Stocktakes |
| `suppliers` | 2 | Suppliers |
| `customers` | 8 | Customers, levels, points, notes |
| `promotions` | 9 | Promotions, advanced promotions, vouchers |
| `transactions` | 7 | Cash book, debt, reconciliation, ad costs |
| `analytics` | 7 | Sales, inventory and customer reports |
| `ads` | 4 | Ads manager |
| `marketplace` | 5 | Shopee / Lazada / TikTok + livestream |
| `einvoices` | 1 | E-invoices |
| `users` | 1 | Shop staff |
| `geo` | 3 | Provinces / districts / communes |

## Common conventions (all SDKs)

- Client constructor: `token`, `base_url`, `timeout`, `max_retries`.
- Typed errors: authentication (401), authorization (403), not-found (404),
  validation (422), rate-limit (429), server (5xx).
- Automatic retry for `429` and `5xx` with exponential backoff.
- Pagination helpers.
- Webhook HMAC-SHA256 signature verification (`X-HitechPos-Signature`).

## Webhooks

HiTechPos pushes events from `https://pos.hitechcloud.vn/webhook`. Each delivery
carries `X-HitechPos-Signature` (HMAC-SHA256 of the raw body, keyed by your webhook
secret), `X-HitechPos-Event`, and `X-HitechPos-Delivery` (idempotency key). Events:
`order.created`, `order.updated`, `order.cancelled`, `stock.changed`, `stock.low`,
`product.created`, `product.updated`, `customer.created`. Verify every signature
before processing.

## Documentation

Vietnamese docs live in [`docs/`](docs): getting started, authentication, API
reference, error handling and rate limiting.

## License

MIT — see [LICENSE](LICENSE).
