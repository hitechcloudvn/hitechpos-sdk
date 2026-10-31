package hitechpos

import "fmt"

// OrdersResource handles Orders endpoints.
type OrdersResource struct {
	client *HTTPClient
}

// List - Danh sach don hang
func (r *OrdersResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders", shopId), params)
}

// Get - Chi tiet don hang
func (r *OrdersResource) Get(shopId string, orderId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders/%s", shopId, orderId), nil)
}

// Create - Tao don hang
func (r *OrdersResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders", shopId), body)
}

// Update - Cap nhat don hang
func (r *OrdersResource) Update(shopId string, orderId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/orders/%s", shopId, orderId), body)
}

// UpdateStatus - Cap nhat trang thai don hang
func (r *OrdersResource) UpdateStatus(shopId string, orderId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/orders/%s/status", shopId, orderId), body)
}

// Messages - Tin nhan cua don hang
func (r *OrdersResource) Messages(shopId string, orderId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders/%s/messages", shopId, orderId), params)
}

// Print - Du lieu in don hang
func (r *OrdersResource) Print(shopId string, orderId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders/%s/print", shopId, orderId), params)
}

// GetTrackingUrl - Lay URL tra cuu van chuyen
func (r *OrdersResource) GetTrackingUrl(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders/get_tracking_url", shopId), body)
}

// ArrangeShipment - Dieu phoi giao hang
func (r *OrdersResource) ArrangeShipment(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders/arrange_shipment", shopId), body)
}

// GetPromotionAdvanceActive - Lay khuyen mai nang cao dang ap dung
func (r *OrdersResource) GetPromotionAdvanceActive(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders/get_promotion_advance_active", shopId), body)
}

// TriggerCall - Kich hoat goi tu dong
func (r *OrdersResource) TriggerCall(shopId string, orderId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders/%s/trigger_call", shopId, orderId), body)
}

// ListSources - Danh sach nguon don
func (r *OrdersResource) ListSources(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/order_source", shopId), params)
}

// ListReturned - Danh sach don tra hang
func (r *OrdersResource) ListReturned(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders_returned", shopId), params)
}

// CreateReturned - Tao don tra hang
func (r *OrdersResource) CreateReturned(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders_returned", shopId), body)
}

// ListTags - Danh sach nhan don
func (r *OrdersResource) ListTags(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders/tags", shopId), params)
}

// CreateTag - Tao nhan don
func (r *OrdersResource) CreateTag(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/orders/tags", shopId), body)
}

// UpdateTag - Cap nhat nhan don
func (r *OrdersResource) UpdateTag(shopId string, tagId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/orders/tags/%s", shopId, tagId), body)
}

// ListTagGroups - Danh sach nhom nhan don
func (r *OrdersResource) ListTagGroups(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/orders/tag_groups", shopId), params)
}

// ListCallLaters - Danh sach hen goi lai
func (r *OrdersResource) ListCallLaters(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/order_call_laters", shopId), params)
}

// CreateCallLater - Tao hen goi lai
func (r *OrdersResource) CreateCallLater(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/order_call_laters", shopId), body)
}

// ListPartners - Danh sach doi tac van chuyen
func (r *OrdersResource) ListPartners(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/partners", shopId), params)
}

// ListProjects - Danh sach du an
func (r *OrdersResource) ListProjects(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/projects", shopId), params)
}
