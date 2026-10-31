import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Khuyen mai, khuyen mai nang cao, voucher. */
export class PromotionsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/promotions - Danh sach khuyen mai */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/promotions`, params);
  }
  /** GET /api/v1/shops/{shop_id}/promotion_advance - Danh sach khuyen mai nang cao */
  listAdvance(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/promotion_advance`, params);
  }
  /** POST /api/v1/shops/{shop_id}/promotion_advance - Tao khuyen mai nang cao */
  createAdvance(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/promotion_advance`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/promotion_advance/{promotion_id} - Cap nhat khuyen mai nang cao */
  updateAdvance(shopId: string, promotionId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/promotion_advance/${promotionId}`, data);
  }
  /** POST /api/v1/shops/{shop_id}/promotion_advance/create_multi - Tao nhieu khuyen mai nang cao */
  createAdvanceMulti(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/promotion_advance/create_multi`, data);
  }
  /** POST /api/v1/shops/{shop_id}/promotion_advance/delete_multi - Xoa nhieu khuyen mai nang cao */
  deleteAdvanceMulti(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/promotion_advance/delete_multi`, data);
  }
  /** GET /api/v1/shops/{shop_id}/vouchers - Danh sach voucher */
  listVouchers(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/vouchers`, params);
  }
  /** GET /api/v1/shops/{shop_id}/vouchers/{voucher_id} - Chi tiet voucher */
  getVoucher(shopId: string, voucherId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/vouchers/${voucherId}`);
  }
  /** POST /api/v1/shops/{shop_id}/vouchers - Tao voucher */
  createVoucher(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/vouchers`, data);
  }
}
