import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Kiem kho. */
export class StocktakingsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/stocktakings - Danh sach phieu kiem kho */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/stocktakings`, params);
  }
  /** GET /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Chi tiet phieu kiem kho */
  get(shopId: string, stocktakingId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/stocktakings/${stocktakingId}`);
  }
  /** POST /api/v1/shops/{shop_id}/stocktakings - Tao phieu kiem kho */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/stocktakings`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/stocktakings/{stocktaking_id} - Cap nhat phieu kiem kho */
  update(shopId: string, stocktakingId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/stocktakings/${stocktakingId}`, data);
  }
}
