import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Don hang, trang thai, van chuyen, nhan, nguon don. */
export class OrdersResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/orders - Danh sach don hang */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders`, params);
  }
  /** GET /api/v1/shops/{shop_id}/orders/{order_id} - Chi tiet don hang */
  get(shopId: string, orderId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders/${orderId}`);
  }
  /** POST /api/v1/shops/{shop_id}/orders - Tao don hang */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/orders/{order_id} - Cap nhat don hang */
  update(shopId: string, orderId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/orders/${orderId}`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/orders/{order_id}/status - Cap nhat trang thai don hang */
  updateStatus(shopId: string, orderId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/orders/${orderId}/status`, data);
  }
  /** GET /api/v1/shops/{shop_id}/orders/{order_id}/messages - Tin nhan cua don hang */
  messages(shopId: string, orderId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders/${orderId}/messages`, params);
  }
  /** GET /api/v1/shops/{shop_id}/orders/{order_id}/print - Du lieu in don hang */
  print(shopId: string, orderId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders/${orderId}/print`, params);
  }
  /** POST /api/v1/shops/{shop_id}/orders/get_tracking_url - Lay URL tra cuu van chuyen */
  getTrackingUrl(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders/get_tracking_url`, data);
  }
  /** POST /api/v1/shops/{shop_id}/orders/arrange_shipment - Dieu phoi giao hang */
  arrangeShipment(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders/arrange_shipment`, data);
  }
  /** POST /api/v1/shops/{shop_id}/orders/get_promotion_advance_active - Lay khuyen mai nang cao dang ap dung */
  getPromotionAdvanceActive(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders/get_promotion_advance_active`, data);
  }
  /** POST /api/v1/shops/{shop_id}/orders/{order_id}/trigger_call - Kich hoat goi tu dong */
  triggerCall(shopId: string, orderId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders/${orderId}/trigger_call`, data);
  }
  /** GET /api/v1/shops/{shop_id}/order_source - Danh sach nguon don */
  listSources(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/order_source`, params);
  }
  /** GET /api/v1/shops/{shop_id}/orders_returned - Danh sach don tra hang */
  listReturned(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders_returned`, params);
  }
  /** POST /api/v1/shops/{shop_id}/orders_returned - Tao don tra hang */
  createReturned(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders_returned`, data);
  }
  /** GET /api/v1/shops/{shop_id}/orders/tags - Danh sach nhan don */
  listTags(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders/tags`, params);
  }
  /** POST /api/v1/shops/{shop_id}/orders/tags - Tao nhan don */
  createTag(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/orders/tags`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/orders/tags/{tag_id} - Cap nhat nhan don */
  updateTag(shopId: string, tagId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/orders/tags/${tagId}`, data);
  }
  /** GET /api/v1/shops/{shop_id}/orders/tag_groups - Danh sach nhom nhan don */
  listTagGroups(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/orders/tag_groups`, params);
  }
  /** GET /api/v1/shops/{shop_id}/order_call_laters - Danh sach hen goi lai */
  listCallLaters(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/order_call_laters`, params);
  }
  /** POST /api/v1/shops/{shop_id}/order_call_laters - Tao hen goi lai */
  createCallLater(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/order_call_laters`, data);
  }
  /** GET /api/v1/shops/{shop_id}/partners - Danh sach doi tac van chuyen */
  listPartners(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/partners`, params);
  }
  /** GET /api/v1/shops/{shop_id}/projects - Danh sach du an */
  listProjects(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/projects`, params);
  }
}
