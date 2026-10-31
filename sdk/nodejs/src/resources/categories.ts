import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Danh muc san pham. */
export class CategoriesResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/categories - Danh sach danh muc */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/categories`, params);
  }
  /** POST /api/v1/shops/{shop_id}/categories - Tao danh muc */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/categories`, data);
  }
}
