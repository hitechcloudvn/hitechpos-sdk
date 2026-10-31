package hitechpos

import "fmt"

// MarketplaceResource handles Marketplace endpoints.
type MarketplaceResource struct {
	client *HTTPClient
}

// GetAccountInfo - Thong tin tai khoan san
func (r *MarketplaceResource) GetAccountInfo(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/marketplace/get_account_info", shopId), params)
}

// Products - San pham tren san
func (r *MarketplaceResource) Products(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/marketplace/products", shopId), params)
}

// ReverseOrder - Don hoan tren san
func (r *MarketplaceResource) ReverseOrder(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/marketplace/reverse_order", shopId), params)
}

// ShopeeEvaluate - Danh gia Shopee
func (r *MarketplaceResource) ShopeeEvaluate(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/shopee/evaluate", shopId), params)
}

// Livestream - Quan ly livestream
func (r *MarketplaceResource) Livestream(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/livestream_manager", shopId), params)
}
