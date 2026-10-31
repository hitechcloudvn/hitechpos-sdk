package hitechpos

import "fmt"

// UsersResource handles Users endpoints.
type UsersResource struct {
	client *HTTPClient
}

// List - Danh sach nhan vien
func (r *UsersResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/users", shopId), params)
}
