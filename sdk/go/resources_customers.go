package hitechpos

import "fmt"

// CustomersResource handles Customers endpoints.
type CustomersResource struct {
	client *HTTPClient
}

// List - Danh sach khach hang
func (r *CustomersResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customers", shopId), params)
}

// Get - Chi tiet khach hang
func (r *CustomersResource) Get(shopId string, customerId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customers/%s", shopId, customerId), nil)
}

// Create - Tao khach hang
func (r *CustomersResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/customers", shopId), body)
}

// Update - Cap nhat khach hang
func (r *CustomersResource) Update(shopId string, customerId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/customers/%s", shopId, customerId), body)
}

// PointLogs - Lich su diem thuong
func (r *CustomersResource) PointLogs(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customers/point_logs", shopId), params)
}

// LoadNotes - Ghi chu khach hang
func (r *CustomersResource) LoadNotes(shopId string, customerId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customers/%s/load_customer_notes", shopId, customerId), params)
}

// CreateNote - Tao ghi chu khach hang
func (r *CustomersResource) CreateNote(shopId string, customerId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/customers/%s/create_note", shopId, customerId), body)
}

// ListLevels - Danh sach cap do khach hang
func (r *CustomersResource) ListLevels(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customer_levels", shopId), params)
}
