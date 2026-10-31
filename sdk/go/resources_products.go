package hitechpos

import "fmt"

// ProductsResource handles Products endpoints.
type ProductsResource struct {
	client *HTTPClient
}

// List - Danh sach san pham
func (r *ProductsResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/products", shopId), params)
}

// Get - Chi tiet san pham
func (r *ProductsResource) Get(shopId string, productId string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/products/%s", shopId, productId), nil)
}

// GetBySku - Chi tiet san pham theo SKU
func (r *ProductsResource) GetBySku(shopId string, productSku string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/products/%s", shopId, productSku), nil)
}

// Create - Tao san pham
func (r *ProductsResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/products", shopId), body)
}

// Update - Cap nhat san pham
func (r *ProductsResource) Update(shopId string, productId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/products/%s", shopId, productId), body)
}

// UpdateHide - An/hien san pham hang loat
func (r *ProductsResource) UpdateHide(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Put(fmt.Sprintf("/api/v1/shops/%s/products/update_hide", shopId), body)
}

// ListVariations - Danh sach bien the
func (r *ProductsResource) ListVariations(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/products/variations", shopId), params)
}

// GetLogisticsShippingDocument - Lay chung tu van chuyen
func (r *ProductsResource) GetLogisticsShippingDocument(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/products/get_logistics_shipping_document", shopId), body)
}

// ListMaterials - Danh sach nguyen vat lieu
func (r *ProductsResource) ListMaterials(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/materials_products", shopId), params)
}

// GetMeasure - Lay don vi do luong
func (r *ProductsResource) GetMeasure(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/product_measurements/get_measure", shopId), params)
}

// ListBrands - Danh sach thuong hieu
func (r *ProductsResource) ListBrands(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/brand", shopId), params)
}

// ListTags - Danh sach nhan san pham
func (r *ProductsResource) ListTags(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/tags_products", shopId), params)
}

// CreateTag - Tao nhan san pham
func (r *ProductsResource) CreateTag(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/tags_products", shopId), body)
}

// ListCombos - Danh sach san pham combo
func (r *ProductsResource) ListCombos(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/combo_products", shopId), params)
}

// CreateCombo - Tao san pham combo
func (r *ProductsResource) CreateCombo(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/combo_products", shopId), body)
}
