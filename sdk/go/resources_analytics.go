package hitechpos

import "fmt"

// AnalyticsResource handles Analytics endpoints.
type AnalyticsResource struct {
	client *HTTPClient
}

// Sale - Bao cao doanh thu
func (r *AnalyticsResource) Sale(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/analytics/sale", shopId), params)
}

// ListFormula - Danh sach cong thuc
func (r *AnalyticsResource) ListFormula(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/analytics/get_list_formula", shopId), params)
}

// GetAnalyticFields - Danh sach truong phan tich
func (r *AnalyticsResource) GetAnalyticFields(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/analytics/get_analytic_fields", shopId), params)
}

// StatisticFolders - Thu muc thong ke tuy chinh
func (r *AnalyticsResource) StatisticFolders(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/statistic_custom/folders", shopId), params)
}

// InventoryByVariation - Phan tich ton theo bien the
func (r *AnalyticsResource) InventoryByVariation(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/inventory_analytics/inventory_by_variation", shopId), params)
}

// InventoryByProduct - Phan tich ton theo san pham
func (r *AnalyticsResource) InventoryByProduct(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/inventory_analytics/inventory_by_product", shopId), params)
}

// CustomerReport - Bao cao khach hang
func (r *AnalyticsResource) CustomerReport(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/customer_analytics/report", shopId), params)
}
