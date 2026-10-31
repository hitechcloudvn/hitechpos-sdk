package main

import (
	"fmt"
	"log"
	"os"

	hitechpos "github.com/hitechcloud-vietnam/hitechpos-sdk/go"
)

func main() {
	client := hitechpos.NewClient(
		hitechpos.WithToken(os.Getenv("HITECHPOS_API_TOKEN")),
	)

	// 1. List accessible shops.
	shops, err := client.Shops.List(nil)
	if err != nil {
		log.Fatal(err)
	}
	data, _ := shops["data"].([]interface{})
	if len(data) == 0 {
		log.Fatal("no shops available")
	}
	shop := data[0].(map[string]interface{})
	shopID := fmt.Sprintf("%v", shop["id"])
	fmt.Println("Shop:", shopID)

	// 2. List products (single page).
	products, err := client.Products.List(shopID, map[string]string{
		"page_number": "1",
		"page_size":   "20",
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Products:", products["data"])

	// 3. Create an order.
	order, err := client.Orders.Create(shopID, map[string]interface{}{
		"customer":     map[string]string{"name": "Nguyen Van A", "phone": "0900000000"},
		"warehouse_id": "wh_1",
		"items": []map[string]interface{}{
			{"variation_id": "var_123", "quantity": 2, "price": 150000},
		},
	})
	if err != nil {
		if rle, ok := err.(*hitechpos.RateLimitError); ok {
			fmt.Println("rate limited, retry after", rle.RetryAfter)
		} else {
			log.Println("create order error:", err)
		}
	} else {
		fmt.Println("Created order:", order["data"])
	}

	// 4. Verify a webhook signature inside your receiver.
	secret := os.Getenv("HITECHPOS_WEBHOOK_SECRET")
	rawBody := []byte(`{"event":"order.created"}`)
	signature := "..." // from X-HitechPos-Signature header
	if hitechpos.VerifySignature(secret, rawBody, signature) {
		fmt.Println("Webhook signature OK")
	}
}
