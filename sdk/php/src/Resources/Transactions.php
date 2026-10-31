<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * So quy, cong no, doi soat, chi phi quang cao.
 */
class Transactions extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/transactions - Danh sach giao dich / phieu thu chi */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/transactions', $params);
    }

    /** POST /api/v1/shops/{shop_id}/transactions - Tao phieu thu / chi */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/transactions', $data);
    }

    /** POST /api/v1/shops/{shop_id}/adv_costs - Ghi nhan chi phi quang cao */
    public function createAdvCost(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/adv_costs', $data);
    }

    /** GET /api/v1/shops/{shop_id}/payment_accounts/get_payment_histories - Lich su thanh toan tai khoan */
    public function paymentHistories(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/payment_accounts/get_payment_histories', $params);
    }

    /** GET /api/v1/shops/{shop_id}/bank_payments - Giao dich ngan hang */
    public function bankPayments(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/bank_payments', $params);
    }

    /** GET /api/v1/shops/{shop_id}/debt - Cong no */
    public function debt(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/debt', $params);
    }

    /** GET /api/v1/shops/{shop_id}/reconciliations - Doi soat */
    public function reconciliations(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/reconciliations', $params);
    }

}