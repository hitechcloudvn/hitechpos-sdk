# HiTechPos Go SDK

> [English](README.md) | **Tiếng Việt**

---

Bộ SDK Go chính thức cho API bán hàng & POS [HiTechPos](https://pos.hitechcloud.vn).

## Cài đặt

```bash
go get github.com/hitechcloudvn/hitechpos-sdk/go
```

## Bắt đầu nhanh

```go
package main

import (
    "fmt"
    "log"

    hitechpos "github.com/hitechcloudvn/hitechpos-sdk/go"
)

func main() {
    client := hitechpos.NewClient(hitechpos.WithToken("YOUR_API_TOKEN"))

    shops, err := client.Shops.List(nil)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(shops["data"])

    _, _ = client.Products.List("shop_123", map[string]string{
        "page_number": "1",
        "page_size":   "20",
    })
}
```

### Tùy chọn

```go
client := hitechpos.NewClient(
    hitechpos.WithToken("..."),
    hitechpos.WithSandbox(),
    hitechpos.WithTimeout(45*time.Second),
    hitechpos.WithMaxRetries(5),
)
```

## Xử lý lỗi

Lỗi có kiểu. Dùng type assertion / `errors.As`:

```go
_, err := client.Orders.Get("shop_123", "missing")
if rle, ok := err.(*hitechpos.RateLimitError); ok {
    fmt.Println("retry after", rle.RetryAfter)
}
```

Phản hồi `429` và `5xx` được tự động thử lại với exponential backoff.

## Webhooks

```go
if hitechpos.VerifySignature(secret, rawBody, signatureHeader) {
    event, _ := hitechpos.ParseEvent(rawBody)
}
```

## Tài nguyên

`client.Shops`, `client.Products`, `client.Variations`, `client.Categories`,
`client.Inventory`, `client.Warehouses`, `client.Orders`, `client.Purchases`,
`client.Exports`, `client.Transfers`, `client.Stocktakings`, `client.Suppliers`,
`client.Customers`, `client.Promotions`, `client.Transactions`, `client.Analytics`,
`client.Ads`, `client.Marketplace`, `client.EInvoices`, `client.Users`, `client.Geo`.

## Giấy phép

MIT
