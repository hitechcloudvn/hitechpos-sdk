package hitechpos

import "fmt"

// TransfersResource handles Transfers endpoints.
type TransfersResource struct {
	client *HTTPClient
}

// List - Danh sach phieu chuyen kho
func (r *TransfersResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/transfers", shopId), params)
}

// Get - Chi tiet phieu chuyen kho
func (r *TransfersResource) Get(shopId string, transferId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/transfers/%s", shopId, transferId), nil)
}

// CreateMulti - Tao nhieu phieu chuyen kho
func (r *TransfersResource) CreateMulti(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/transfers/multi", shopId), body)
}

// Update - Cap nhat phieu chuyen kho
func (r *TransfersResource) Update(shopId string, transferId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/transfers/%s", shopId, transferId), body)
}

// StatusHistory - Lich su trang thai chuyen kho
func (r *TransfersResource) StatusHistory(shopId string, transferId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/transfers/get_status_history/%s", shopId, transferId), params)
}
