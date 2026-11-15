# Getting started with HiTechPos SDK

> **English** | [Tiếng Việt](getting-started.vi.md)

---

This guide connects you to the HiTechPos API in minutes: create a key, get a shop
ID, and make your first request.

## 1. Create an API key

1. Sign in to the HiTechPos admin portal at `https://pos.hitechcloud.vn`.
2. Go to **Configuration** → **API & Integrations** → **API Key**.
3. Click **+ Create new API key**, name the application and pick the shop scope.
4. Copy the **API key** (shown only once) and store it in an environment variable.

> ⚠️ The API key has read/write access to sales data. Do not embed it in frontend
> code and do not commit it to a public repository.

## 2. Install the SDK

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

## 3. Create a client

```python
from hitechpos import HiTechPos

client = HiTechPos(token="YOUR_API_TOKEN")           # production
# client = HiTechPos(token="...", base_url=HiTechPos.SANDBOX_URL)  # sandbox
```

Constructor parameters (the same across every SDK):

| Parameter | Default | Meaning |
|---------|----------|---------|
| `token` | — | API token, sent as a Bearer token |
| `base_url` | `https://pos.hitechcloud.vn` | Base URL (switch to sandbox for testing) |
| `timeout` | `30` | Per-request timeout (seconds) |
| `max_retries` | `3` | Retry attempts on `429` / `5xx` |

## 4. List shops

Every business resource belongs to a shop and is addressed through the nested path
`/api/v1/shops/{shop_id}/...`.

```python
shops = client.shops.list()
shop_id = shops["data"][0]["id"]
```

## 5. List products and create an order

```python
products = client.products.list(shop_id, params={"page_number": 1, "page_size": 20})

order = client.orders.create(shop_id, {
    "customer": {"name": "Nguyen Van A", "phone": "0900000000"},
    "items": [{"variation_id": "var_123", "quantity": 1, "price": 99000}],
    "warehouse_id": "wh_1",
})
```

## 6. Next steps

- [Authentication](authentication.md)
- [Full API reference](api-reference.md)
- [Error handling](error-handling.md)
- [Rate limiting](rate-limiting.md)
