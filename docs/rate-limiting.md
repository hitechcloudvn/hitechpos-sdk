# Rate limiting

> **English** | [Tiếng Việt](rate-limiting.vi.md)

---

HiTechPos limits how many requests you can make in a period of time. When you exceed
the quota, the API returns `429 Too Many Requests` with a `Retry-After` header
(the number of seconds to wait before retrying).

## Automatic SDK retries

Each SDK automatically retries `429` and `5xx` responses using *exponential backoff*:

- For `429`: wait the `Retry-After` value (or exponential backoff when the header is
  absent), then retry.
- For `5xx` and connection errors: wait `2^attempt` seconds, then retry.
- The maximum number of attempts is set by `max_retries` (default `3`). Once they run
  out, the SDK raises `RateLimitError` (or `ServerError`).

```python
client = HiTechPos(token="...", max_retries=5)
```

```ts
const client = new HiTechPos({ token: "...", maxRetries: 5 });
```

```go
client := hitechpos.NewClient(hitechpos.WithToken("..."), hitechpos.WithMaxRetries(5))
```

## Handling exhausted retries

```python
from hitechpos import RateLimitError

try:
    client.products.list(shop_id)
except RateLimitError as e:
    print("Rate limited, retry after", e.retry_after, "seconds")
```

## Best practices

- **Paginate sensibly:** use a moderate `page_size` (for example 20–100) instead of
  pulling everything at once.
- **Use webhooks** instead of continuous polling to receive changes almost instantly.
- **Use `updated_since`** (where the endpoint supports it) to fetch only recently
  changed data.
- **Respect `Retry-After`** — never retry faster than the server asks.
- **Batch operations** through bulk endpoints (for example `transfers/multi`,
  `promotion_advance/create_multi`) where possible.
