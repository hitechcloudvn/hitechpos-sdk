import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Bien the san pham va cap nhat ton kho. */
export class VariationsResource extends BaseResource {
  /** POST /api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity - Cap nhat so luong ton cua 1 bien the */
  updateQuantity(shopId: string, variationId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/variations/${variationId}/update_quantity`, data);
  }
  /** POST /api/v1/shops/{shop_id}/variations/update_quantity - Cap nhat so luong ton hang loat */
  updateQuantityBulk(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/variations/update_quantity`, data);
  }
  /** POST /api/v1/shops/{shop_id}/variations/update_composite_product - Cap nhat san pham dinh muc */
  updateCompositeProduct(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/variations/update_composite_product`, data);
  }
}
