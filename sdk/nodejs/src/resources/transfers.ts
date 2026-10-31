import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Chuyen kho. */
export class TransfersResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/transfers - Danh sach phieu chuyen kho */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/transfers`, params);
  }
  /** GET /api/v1/shops/{shop_id}/transfers/{transfer_id} - Chi tiet phieu chuyen kho */
  get(shopId: string, transferId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/transfers/${transferId}`);
  }
  /** POST /api/v1/shops/{shop_id}/transfers/multi - Tao nhieu phieu chuyen kho */
  createMulti(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/transfers/multi`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/transfers/{transfer_id} - Cap nhat phieu chuyen kho */
  update(shopId: string, transferId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/transfers/${transferId}`, data);
  }
  /** GET /api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id} - Lich su trang thai chuyen kho */
  statusHistory(shopId: string, transferId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/transfers/get_status_history/${transferId}`, params);
  }
}
