package hitechpos

import "fmt"

// CategoriesResource handles Categories endpoints.
type CategoriesResource struct {
	client *HTTPClient
}

// List - Danh sach danh muc
func (r *CategoriesResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/categories", shopId), params)
}

// Create - Tao danh muc
func (r *CategoriesResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/categories", shopId), body)
}
