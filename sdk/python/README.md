# HiTechPos Python SDK

> **English** | [Tiếng Việt](README.vi.md)

---

Official Python SDK for the [HiTechPos](https://pos.hitechcloud.vn) sales & POS API.

## Installation

```bash
pip install hitechpos
```

## Quick start

```python
from hitechpos import HiTechPos

client = HiTechPos(token="YOUR_API_TOKEN")

shops = client.shops.list()
shop_id = shops["data"][0]["id"]

products = client.products.list(shop_id, params={"page_number": 1, "page_size": 20})

order = client.orders.create(shop_id, {
    "customer": {"name": "Nguyen Van A", "phone": "0900000000"},
    "items": [{"variation_id": "var_123", "quantity": 1, "price": 99000}],
    "warehouse_id": "wh_1",
})
```

### Sandbox

```python
client = HiTechPos(token="...", base_url=HiTechPos.SANDBOX_URL)
```

## Pagination

Every list endpoint accepts `page_number` / `page_size`. The HTTP client exposes a
generator that walks every page automatically:

```python
for product in client._http.paginate(f"/api/v1/shops/{shop_id}/products"):
    print(product["name"])
```

## Error handling

```python
from hitechpos import HiTechPosError, NotFoundError, RateLimitError

try:
    client.orders.get(shop_id, "missing")
except NotFoundError:
    ...
except RateLimitError as e:
    print("retry after", e.retry_after)
except HiTechPosError as e:
    print(e.status_code, e.message)
```

The client automatically retries `429` and `5xx` responses with exponential backoff
(`max_retries`, default 3).

## Webhooks

```python
from hitechpos import verify_signature, parse_event

if verify_signature(secret, raw_body, request.headers["X-HitechPos-Signature"]):
    event = parse_event(raw_body)
```

## Resource groups

| Resource | Methods |
|----------|---------|
| `client.shops` | 3 |
| `client.products` | 15 |
| `client.variations` | 3 |
| `client.categories` | 2 |
| `client.inventory` | 3 |
| `client.warehouses` | 3 |
| `client.orders` | 22 |
| `client.purchases` | 5 |
| `client.exports` | 4 |
| `client.transfers` | 5 |
| `client.stocktakings` | 4 |
| `client.suppliers` | 2 |
| `client.customers` | 8 |
| `client.promotions` | 9 |
| `client.transactions` | 7 |
| `client.analytics` | 7 |
| `client.ads` | 4 |
| `client.marketplace` | 5 |
| `client.einvoices` | 1 |
| `client.users` | 1 |
| `client.geo` | 3 |

## License

MIT
