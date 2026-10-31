import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Khach hang, cap do, diem, ghi chu. */
export class CustomersResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/customers - Danh sach khach hang */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customers`, params);
  }
  /** GET /api/v1/shops/{shop_id}/customers/{customer_id} - Chi tiet khach hang */
  get(shopId: string, customerId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customers/${customerId}`);
  }
  /** POST /api/v1/shops/{shop_id}/customers - Tao khach hang */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/customers`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/customers/{customer_id} - Cap nhat khach hang */
  update(shopId: string, customerId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/customers/${customerId}`, data);
  }
  /** GET /api/v1/shops/{shop_id}/customers/point_logs - Lich su diem thuong */
  pointLogs(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customers/point_logs`, params);
  }
  /** GET /api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes - Ghi chu khach hang */
  loadNotes(shopId: string, customerId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customers/${customerId}/load_customer_notes`, params);
  }
  /** POST /api/v1/shops/{shop_id}/customers/{customer_id}/create_note - Tao ghi chu khach hang */
  createNote(shopId: string, customerId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/customers/${customerId}/create_note`, data);
  }
  /** GET /api/v1/shops/{shop_id}/customer_levels - Danh sach cap do khach hang */
  listLevels(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customer_levels`, params);
  }
}
