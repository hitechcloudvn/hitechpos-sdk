package hitechpos

import "time"

const (
	ProductionURL = "https://pos.hitechcloud.vn"
	SandboxURL    = "https://pos-sandbox.hitechcloud.vn"
	Version       = "1.0.0"
)

// HiTechPos is the main client for the HiTechPos API.
type HiTechPos struct {
	httpClient *HTTPClient
	Shops *ShopsResource
	Products *ProductsResource
	Variations *VariationsResource
	Categories *CategoriesResource
	Inventory *InventoryResource
	Warehouses *WarehousesResource
	Orders *OrdersResource
	Purchases *PurchasesResource
	Exports *ExportsResource
	Transfers *TransfersResource
	Stocktakings *StocktakingsResource
	Suppliers *SuppliersResource
	Customers *CustomersResource
	Promotions *PromotionsResource
	Transactions *TransactionsResource
	Analytics *AnalyticsResource
	Ads *AdsResource
	Marketplace *MarketplaceResource
	EInvoices *EInvoicesResource
	Users *UsersResource
	Geo *GeoResource
}

// ClientOption configures the client.
type ClientOption func(*clientConfig)

type clientConfig struct {
	baseURL    string
	token      string
	timeout    time.Duration
	maxRetries int
}

// WithToken sets the bearer token.
func WithToken(token string) ClientOption {
	return func(c *clientConfig) { c.token = token }
}

// WithBaseURL sets a custom base URL.
func WithBaseURL(url string) ClientOption {
	return func(c *clientConfig) { c.baseURL = url }
}

// WithSandbox targets the sandbox environment.
func WithSandbox() ClientOption {
	return func(c *clientConfig) { c.baseURL = SandboxURL }
}

// WithTimeout sets the request timeout.
func WithTimeout(timeout time.Duration) ClientOption {
	return func(c *clientConfig) { c.timeout = timeout }
}

// WithMaxRetries sets the retry count.
func WithMaxRetries(n int) ClientOption {
	return func(c *clientConfig) { c.maxRetries = n }
}

// NewClient builds a new HiTechPos client.
func NewClient(opts ...ClientOption) *HiTechPos {
	cfg := &clientConfig{baseURL: ProductionURL, timeout: 30 * time.Second, maxRetries: 3}
	for _, opt := range opts {
		opt(cfg)
	}
	hc := &HiTechPos{}
	hc.httpClient = newHTTPClient(cfg.baseURL, cfg.token, cfg.timeout, cfg.maxRetries)
	hc.Shops = &ShopsResource{client: hc.httpClient}
	hc.Products = &ProductsResource{client: hc.httpClient}
	hc.Variations = &VariationsResource{client: hc.httpClient}
	hc.Categories = &CategoriesResource{client: hc.httpClient}
	hc.Inventory = &InventoryResource{client: hc.httpClient}
	hc.Warehouses = &WarehousesResource{client: hc.httpClient}
	hc.Orders = &OrdersResource{client: hc.httpClient}
	hc.Purchases = &PurchasesResource{client: hc.httpClient}
	hc.Exports = &ExportsResource{client: hc.httpClient}
	hc.Transfers = &TransfersResource{client: hc.httpClient}
	hc.Stocktakings = &StocktakingsResource{client: hc.httpClient}
	hc.Suppliers = &SuppliersResource{client: hc.httpClient}
	hc.Customers = &CustomersResource{client: hc.httpClient}
	hc.Promotions = &PromotionsResource{client: hc.httpClient}
	hc.Transactions = &TransactionsResource{client: hc.httpClient}
	hc.Analytics = &AnalyticsResource{client: hc.httpClient}
	hc.Ads = &AdsResource{client: hc.httpClient}
	hc.Marketplace = &MarketplaceResource{client: hc.httpClient}
	hc.EInvoices = &EInvoicesResource{client: hc.httpClient}
	hc.Users = &UsersResource{client: hc.httpClient}
	hc.Geo = &GeoResource{client: hc.httpClient}
	return hc
}

// SetToken updates the bearer token.
func (c *HiTechPos) SetToken(token string) {
	c.httpClient.SetToken(token)
}
