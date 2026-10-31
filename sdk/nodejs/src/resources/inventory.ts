import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Ton kho, lich su ton va lo. */
export class InventoryResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/inventory - Ton kho theo kho/chi nhanh */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/inventory`, params);
  }
  /** GET /api/v1/shops/{shop_id}/inventory_histories - Lich su bien dong ton kho */
  histories(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/inventory_histories`, params);
  }
  /** GET /api/v1/shops/{shop_id}/lots - Danh sach lo / han su dung */
  listLots(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/lots`, params);
  }
}
