package hitechpos

import "fmt"

// WarehousesResource handles Warehouses endpoints.
type WarehousesResource struct {
	client *HTTPClient
}

// List - Danh sach kho
func (r *WarehousesResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/warehouses", shopId), params)
}

// Create - Tao kho
func (r *WarehousesResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/warehouses", shopId), body)
}

// Update - Cap nhat kho
func (r *WarehousesResource) Update(shopId string, warehouseId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/warehouses/%s", shopId, warehouseId), body)
}
