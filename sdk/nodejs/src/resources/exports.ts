import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Phieu xuat huy / xuat kho. */
export class ExportsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/export - Danh sach phieu xuat */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/export`, params);
  }
  /** GET /api/v1/shops/{shop_id}/export/{export_id} - Chi tiet phieu xuat */
  get(shopId: string, exportId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/export/${exportId}`);
  }
  /** POST /api/v1/shops/{shop_id}/export - Tao phieu xuat */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/export`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/export/{export_id} - Cap nhat phieu xuat */
  update(shopId: string, exportId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/export/${exportId}`, data);
  }
}
