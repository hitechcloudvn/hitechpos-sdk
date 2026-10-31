package hitechpos

import "fmt"

// AdsResource handles Ads endpoints.
type AdsResource struct {
	client *HTTPClient
}

// AdAccounts - Danh sach tai khoan quang cao
func (r *AdsResource) AdAccounts(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/ads_manager/ad_accounts", shopId), params)
}

// Campaigns - Danh sach chien dich
func (r *AdsResource) Campaigns(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/ads_manager/campaigns_v2", shopId), params)
}

// AdSets - Danh sach nhom quang cao
func (r *AdsResource) AdSets(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/ads_manager/ad_sets_v2", shopId), params)
}

// Ads - Danh sach quang cao
func (r *AdsResource) Ads(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/ads_manager/ads_v2", shopId), params)
}
