package hitechpos

import "fmt"

// PurchasesResource handles Purchases endpoints.
type PurchasesResource struct {
	client *HTTPClient
}

// List - Danh sach phieu nhap
func (r *PurchasesResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/purchases", shopId), params)
}

// Get - Chi tiet phieu nhap
func (r *PurchasesResource) Get(shopId string, purchaseId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/purchases/%s", shopId, purchaseId), nil)
}

// Create - Tao phieu nhap
func (r *PurchasesResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/purchases", shopId), body)
}

// Update - Cap nhat phieu nhap
func (r *PurchasesResource) Update(shopId string, purchaseId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/purchases/%s", shopId, purchaseId), body)
}

// Separate - Tach phieu nhap
func (r *PurchasesResource) Separate(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/purchases/separate", shopId), body)
}
