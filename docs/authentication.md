# Authentication

> **English** | [Tiếng Việt](authentication.vi.md)

---

The HiTechPos API authenticates with an **API token** sent with every request as a
Bearer token.

## Authentication header

```
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json
Accept: application/json
```

The SDK attaches this header automatically once you pass `token` to the client.

```python
from hitechpos import HiTechPos
client = HiTechPos(token="YOUR_API_TOKEN")
```

```ts
import { HiTechPos } from "@hitechcloudvn/hitechpos-sdk";
const client = new HiTechPos({ token: "YOUR_API_TOKEN" });
```

```php
$client = new HiTechCloud\HiTechPos\HiTechPos("YOUR_API_TOKEN");
```

```go
client := hitechpos.NewClient(hitechpos.WithToken("YOUR_API_TOKEN"))
```

```java
HiTechPos client = new HiTechPos("YOUR_API_TOKEN");
```

## Rotating the token at runtime

```python
client.set_token("NEW_TOKEN")
```

Every SDK exposes `set_token` / `setToken` / `SetToken`.

## Shop scope

Each token is granted access to one or more shops. Use `client.shops.list()` to see
which shops your token can access, then pass the matching `shop_id` on later calls.

## Environments

| Environment | Base URL |
|------------|----------|
| Production | `https://pos.hitechcloud.vn` |
| Sandbox | `https://pos-sandbox.hitechcloud.vn` |

Sandbox data is fully isolated from production — use it to try pushing orders,
deducting stock and receiving webhooks without touching real data.

## Key security

- Do not embed the token in frontend code (browser JavaScript, mobile apps).
- Store the token in an environment variable or a secret manager.
- Revoke and reissue the token immediately if you suspect it has leaked.
