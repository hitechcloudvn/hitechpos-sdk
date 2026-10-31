package hitechpos

import "fmt"

// ShopsResource handles Shops endpoints.
type ShopsResource struct {
	client *HTTPClient
}

// List - Danh sach cua hang
func (r *ShopsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.client.Get("/api/v1/shops", params)
}

// Get - Chi tiet cua hang
func (r *ShopsResource) Get(shopId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s", shopId), nil)
}

// Update - Cap nhat cua hang / webhook
func (r *ShopsResource) Update(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s", shopId), body)
}
