package hitechpos

import "fmt"

// InventoryResource handles Inventory endpoints.
type InventoryResource struct {
	client *HTTPClient
}

// List - Ton kho theo kho/chi nhanh
func (r *InventoryResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/inventory", shopId), params)
}

// Histories - Lich su bien dong ton kho
func (r *InventoryResource) Histories(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/inventory_histories", shopId), params)
}

// ListLots - Danh sach lo / han su dung
func (r *InventoryResource) ListLots(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/lots", shopId), params)
}
