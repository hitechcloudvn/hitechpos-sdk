package hitechpos

import "fmt"

// ExportsResource handles Exports endpoints.
type ExportsResource struct {
	client *HTTPClient
}

// List - Danh sach phieu xuat
func (r *ExportsResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/export", shopId), params)
}

// Get - Chi tiet phieu xuat
func (r *ExportsResource) Get(shopId string, exportId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/export/%s", shopId, exportId), nil)
}

// Create - Tao phieu xuat
func (r *ExportsResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/export", shopId), body)
}

// Update - Cap nhat phieu xuat
func (r *ExportsResource) Update(shopId string, exportId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/export/%s", shopId, exportId), body)
}
