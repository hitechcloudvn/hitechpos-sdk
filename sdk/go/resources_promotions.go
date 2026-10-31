package hitechpos

import "fmt"

// PromotionsResource handles Promotions endpoints.
type PromotionsResource struct {
	client *HTTPClient
}

// List - Danh sach khuyen mai
func (r *PromotionsResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/promotions", shopId), params)
}

// ListAdvance - Danh sach khuyen mai nang cao
func (r *PromotionsResource) ListAdvance(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/promotion_advance", shopId), params)
}

// CreateAdvance - Tao khuyen mai nang cao
func (r *PromotionsResource) CreateAdvance(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/promotion_advance", shopId), body)
}

// UpdateAdvance - Cap nhat khuyen mai nang cao
func (r *PromotionsResource) UpdateAdvance(shopId string, promotionId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/promotion_advance/%s", shopId, promotionId), body)
}

// CreateAdvanceMulti - Tao nhieu khuyen mai nang cao
func (r *PromotionsResource) CreateAdvanceMulti(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/promotion_advance/create_multi", shopId), body)
}

// DeleteAdvanceMulti - Xoa nhieu khuyen mai nang cao
func (r *PromotionsResource) DeleteAdvanceMulti(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/promotion_advance/delete_multi", shopId), body)
}

// ListVouchers - Danh sach voucher
func (r *PromotionsResource) ListVouchers(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/vouchers", shopId), params)
}

// GetVoucher - Chi tiet voucher
func (r *PromotionsResource) GetVoucher(shopId string, voucherId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/vouchers/%s", shopId, voucherId), nil)
}

// CreateVoucher - Tao voucher
func (r *PromotionsResource) CreateVoucher(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/vouchers", shopId), body)
}
