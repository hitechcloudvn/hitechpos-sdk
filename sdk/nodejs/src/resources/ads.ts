import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Trinh quan ly quang cao. */
export class AdsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/ads_manager/ad_accounts - Danh sach tai khoan quang cao */
  adAccounts(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/ads_manager/ad_accounts`, params);
  }
  /** GET /api/v1/shops/{shop_id}/ads_manager/campaigns_v2 - Danh sach chien dich */
  campaigns(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/ads_manager/campaigns_v2`, params);
  }
  /** GET /api/v1/shops/{shop_id}/ads_manager/ad_sets_v2 - Danh sach nhom quang cao */
  adSets(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/ads_manager/ad_sets_v2`, params);
  }
  /** GET /api/v1/shops/{shop_id}/ads_manager/ads_v2 - Danh sach quang cao */
  ads(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/ads_manager/ads_v2`, params);
  }
}
