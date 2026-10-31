import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Hoa don dien tu. */
export class EInvoicesResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/list_einvoices - Danh sach hoa don dien tu */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/list_einvoices`, params);
  }
}
