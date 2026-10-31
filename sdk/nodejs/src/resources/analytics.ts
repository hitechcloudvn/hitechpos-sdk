import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Bao cao ban hang, ton kho, khach hang. */
export class AnalyticsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/analytics/sale - Bao cao doanh thu */
  sale(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/analytics/sale`, params);
  }
  /** GET /api/v1/shops/{shop_id}/analytics/get_list_formula - Danh sach cong thuc */
  listFormula(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/analytics/get_list_formula`, params);
  }
  /** GET /api/v1/shops/{shop_id}/analytics/get_analytic_fields - Danh sach truong phan tich */
  getAnalyticFields(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/analytics/get_analytic_fields`, params);
  }
  /** GET /api/v1/shops/{shop_id}/statistic_custom/folders - Thu muc thong ke tuy chinh */
  statisticFolders(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/statistic_custom/folders`, params);
  }
  /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation - Phan tich ton theo bien the */
  inventoryByVariation(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/inventory_analytics/inventory_by_variation`, params);
  }
  /** GET /api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product - Phan tich ton theo san pham */
  inventoryByProduct(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/inventory_analytics/inventory_by_product`, params);
  }
  /** GET /api/v1/shops/{shop_id}/customer_analytics/report - Bao cao khach hang */
  customerReport(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/customer_analytics/report`, params);
  }
}
