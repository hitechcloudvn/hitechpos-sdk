package hitechpos

import "fmt"

// VariationsResource handles Variations endpoints.
type VariationsResource struct {
	client *HTTPClient
}

// UpdateQuantity - Cap nhat so luong ton cua 1 bien the
func (r *VariationsResource) UpdateQuantity(shopId string, variationId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/variations/%s/update_quantity", shopId, variationId), body)
}

// UpdateQuantityBulk - Cap nhat so luong ton hang loat
func (r *VariationsResource) UpdateQuantityBulk(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/variations/update_quantity", shopId), body)
}

// UpdateCompositeProduct - Cap nhat san pham dinh muc
func (r *VariationsResource) UpdateCompositeProduct(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/variations/update_composite_product", shopId), body)
}
