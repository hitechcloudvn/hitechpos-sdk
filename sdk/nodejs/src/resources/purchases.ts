import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Phieu nhap hang. */
export class PurchasesResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/purchases - Danh sach phieu nhap */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/purchases`, params);
  }
  /** GET /api/v1/shops/{shop_id}/purchases/{purchase_id} - Chi tiet phieu nhap */
  get(shopId: string, purchaseId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/purchases/${purchaseId}`);
  }
  /** POST /api/v1/shops/{shop_id}/purchases - Tao phieu nhap */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/purchases`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/purchases/{purchase_id} - Cap nhat phieu nhap */
  update(shopId: string, purchaseId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/purchases/${purchaseId}`, data);
  }
  /** POST /api/v1/shops/{shop_id}/purchases/separate - Tach phieu nhap */
  separate(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/purchases/separate`, data);
  }
}
