# Error handling

> **English** | [Tiếng Việt](error-handling.vi.md)

---

When the API returns a status code `>= 400`, the SDK throws a typed exception instead
of returning data, so you can catch exactly the error kind you need to handle.

## Error mapping

| HTTP | Exception class | Meaning |
|------|--------------|---------|
| 401 | `AuthenticationError` | Token missing or invalid |
| 403 | `AuthorizationError` | Token has no access to this shop/resource |
| 404 | `NotFoundError` | Resource not found |
| 422 | `ValidationError` | Submitted data is invalid |
| 429 | `RateLimitError` | Rate limit exceeded (carries `retry_after`) |
| 5xx | `ServerError` | Server-side error |
| other | `HiTechPosError` | Base / unknown error |

All of the classes above inherit from `HiTechPosError` (Python/JS/PHP/Java) or implement
`error` with the `HiTechPosError` struct (Go). Every error carries `status_code`/
`statusCode`, a message, and the raw response data.

## Python

```python
from hitechpos import HiTechPosError, NotFoundError, ValidationError, RateLimitError

try:
    client.orders.get(shop_id, "khong_ton_tai")
except NotFoundError:
    ...
except ValidationError as e:
    print(e.errors)
except RateLimitError as e:
    print("retry after", e.retry_after, "seconds")
except HiTechPosError as e:
    print(e.status_code, e.message)
```

## Node.js / TypeScript

```ts
import { NotFoundError, RateLimitError, HiTechPosError } from "@hitechcloudvn/hitechpos-sdk";

try {
  await client.orders.get(shopId, "khong_ton_tai");
} catch (e) {
  if (e instanceof RateLimitError) console.log(e.retryAfter);
  else if (e instanceof HiTechPosError) console.log(e.statusCode, e.message);
}
```

## PHP

```php
use HiTechCloud\HiTechPos\{HiTechPosException, NotFoundException, RateLimitException};

try {
    $client->orders->get($shopId, 'khong_ton_tai');
} catch (RateLimitException $e) {
    echo $e->getRetryAfter();
} catch (HiTechPosException $e) {
    echo $e->getCode() . ': ' . $e->getMessage();
}
```

## Go

```go
_, err := client.Orders.Get("shop_123", "khong_ton_tai")
if nf, ok := err.(*hitechpos.NotFoundError); ok {
    fmt.Println("not found:", nf.Message)
}
```

## Java

```java
try {
    client.orders().get(shopId, "khong_ton_tai");
} catch (RateLimitException e) {
    System.out.println(e.getRetryAfter());
} catch (HiTechPosException e) {
    System.out.println(e.getStatusCode());
}
```

## Error response shape

```json
{
  "status": "error",
  "error": "Error description"
}
```

The SDK reads the `error` (or `message`) field to build the exception message.
