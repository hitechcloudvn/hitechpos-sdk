import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Nha cung cap. */
export class SuppliersResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/suppliers - Danh sach nha cung cap */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/suppliers`, params);
  }
  /** GET /api/v1/shops/{shop_id}/supplier - Danh sach nha cung cap (rut gon) */
  listSimple(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/supplier`, params);
  }
}
