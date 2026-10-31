package hitechpos

// GeoResource handles Geo endpoints.
type GeoResource struct {
	client *HTTPClient
}

// Provinces - Danh sach tinh / thanh
func (r *GeoResource) Provinces(params map[string]string) (map[string]interface{}, error) {
	return r.client.Get("/api/v1/geo/provinces", params)
}

// Districts - Danh sach quan / huyen
func (r *GeoResource) Districts(params map[string]string) (map[string]interface{}, error) {
	return r.client.Get("/api/v1/geo/districts", params)
}

// Communes - Danh sach phuong / xa
func (r *GeoResource) Communes(params map[string]string) (map[string]interface{}, error) {
	return r.client.Get("/api/v1/geo/communes", params)
}
