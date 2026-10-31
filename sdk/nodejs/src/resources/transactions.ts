import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** So quy, cong no, doi soat, chi phi quang cao. */
export class TransactionsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/transactions - Danh sach giao dich / phieu thu chi */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/transactions`, params);
  }
  /** POST /api/v1/shops/{shop_id}/transactions - Tao phieu thu / chi */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/transactions`, data);
  }
  /** POST /api/v1/shops/{shop_id}/adv_costs - Ghi nhan chi phi quang cao */
  createAdvCost(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/adv_costs`, data);
  }
  /** GET /api/v1/shops/{shop_id}/payment_accounts/get_payment_histories - Lich su thanh toan tai khoan */
  paymentHistories(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/payment_accounts/get_payment_histories`, params);
  }
  /** GET /api/v1/shops/{shop_id}/bank_payments - Giao dich ngan hang */
  bankPayments(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/bank_payments`, params);
  }
  /** GET /api/v1/shops/{shop_id}/debt - Cong no */
  debt(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/debt`, params);
  }
  /** GET /api/v1/shops/{shop_id}/reconciliations - Doi soat */
  reconciliations(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/reconciliations`, params);
  }
}
