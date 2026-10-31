package hitechpos

import "fmt"

// SuppliersResource handles Suppliers endpoints.
type SuppliersResource struct {
	client *HTTPClient
}

// List - Danh sach nha cung cap
func (r *SuppliersResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/suppliers", shopId), params)
}

// ListSimple - Danh sach nha cung cap (rut gon)
func (r *SuppliersResource) ListSimple(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/supplier", shopId), params)
}
