import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Nhan vien / nguoi dung cua cua hang. */
export class UsersResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/users - Danh sach nhan vien */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/users`, params);
  }
}
