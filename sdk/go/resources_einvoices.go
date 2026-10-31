package hitechpos

import "fmt"

// EInvoicesResource handles EInvoices endpoints.
type EInvoicesResource struct {
	client *HTTPClient
}

// List - Danh sach hoa don dien tu
func (r *EInvoicesResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/list_einvoices", shopId), params)
}
