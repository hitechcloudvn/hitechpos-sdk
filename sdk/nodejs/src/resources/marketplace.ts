import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** San TMDT Shopee / Lazada / TikTok va livestream. */
export class MarketplaceResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/marketplace/get_account_info - Thong tin tai khoan san */
  getAccountInfo(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/marketplace/get_account_info`, params);
  }
  /** GET /api/v1/shops/{shop_id}/marketplace/products - San pham tren san */
  products(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/marketplace/products`, params);
  }
  /** GET /api/v1/shops/{shop_id}/marketplace/reverse_order - Don hoan tren san */
  reverseOrder(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/marketplace/reverse_order`, params);
  }
  /** GET /api/v1/shops/{shop_id}/shopee/evaluate - Danh gia Shopee */
  shopeeEvaluate(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/shopee/evaluate`, params);
  }
  /** GET /api/v1/shops/{shop_id}/livestream_manager - Quan ly livestream */
  livestream(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/livestream_manager`, params);
  }
}
