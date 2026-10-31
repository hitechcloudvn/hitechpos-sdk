import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Quan ly cua hang (shop) va cau hinh webhook. */
export class ShopsResource extends BaseResource {
  /** GET /api/v1/shops - Danh sach cua hang */
  list(params?: QueryParams): Promise<unknown> {
    return this.http.get("/api/v1/shops", params);
  }
  /** GET /api/v1/shops/{shop_id} - Chi tiet cua hang */
  get(shopId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}`);
  }
  /** PUT /api/v1/shops/{shop_id} - Cap nhat cua hang / webhook */
  update(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}`, data);
  }
}
