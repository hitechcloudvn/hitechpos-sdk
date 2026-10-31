package hitechpos

import "fmt"

// StocktakingsResource handles Stocktakings endpoints.
type StocktakingsResource struct {
	client *HTTPClient
}

// List - Danh sach phieu kiem kho
func (r *StocktakingsResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/stocktakings", shopId), params)
}

// Get - Chi tiet phieu kiem kho
func (r *StocktakingsResource) Get(shopId string, stocktakingId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/stocktakings/%s", shopId, stocktakingId), nil)
}

// Create - Tao phieu kiem kho
func (r *StocktakingsResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/stocktakings", shopId), body)
}

// Update - Cap nhat phieu kiem kho
func (r *StocktakingsResource) Update(shopId string, stocktakingId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/stocktakings/%s", shopId, stocktakingId), body)
}
