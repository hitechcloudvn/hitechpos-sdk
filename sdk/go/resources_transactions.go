package hitechpos

import "fmt"

// TransactionsResource handles Transactions endpoints.
type TransactionsResource struct {
	client *HTTPClient
}

// List - Danh sach giao dich / phieu thu chi
func (r *TransactionsResource) List(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/transactions", shopId), params)
}

// Create - Tao phieu thu / chi
func (r *TransactionsResource) Create(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/transactions", shopId), body)
}

// CreateAdvCost - Ghi nhan chi phi quang cao
func (r *TransactionsResource) CreateAdvCost(shopId string, body interface{}) (map[string]interface{}, error) {
	return r.client.Post(fmt.Sprintf("/api/v1/shops/%s/adv_costs", shopId), body)
}

// PaymentHistories - Lich su thanh toan tai khoan
func (r *TransactionsResource) PaymentHistories(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/payment_accounts/get_payment_histories", shopId), params)
}

// BankPayments - Giao dich ngan hang
func (r *TransactionsResource) BankPayments(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/bank_payments", shopId), params)
}

// Debt - Cong no
func (r *TransactionsResource) Debt(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/debt", shopId), params)
}

// Reconciliations - Doi soat
func (r *TransactionsResource) Reconciliations(shopId string, params map[string]string) (map[string]interface{}, error) {
	return r.client.Get(fmt.Sprintf("/api/v1/shops/%s/reconciliations", shopId), params)
}
