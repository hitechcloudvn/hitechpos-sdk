import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Kho / chi nhanh. */
export class WarehousesResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/warehouses - Danh sach kho */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/warehouses`, params);
  }
  /** POST /api/v1/shops/{shop_id}/warehouses - Tao kho */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/warehouses`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/warehouses/{warehouse_id} - Cap nhat kho */
  update(shopId: string, warehouseId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/warehouses/${warehouseId}`, data);
  }
}
