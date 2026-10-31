import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** San pham, bien the, danh muc phu, combo, nhan. */
export class ProductsResource extends BaseResource {
  /** GET /api/v1/shops/{shop_id}/products - Danh sach san pham */
  list(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/products`, params);
  }
  /** GET /api/v1/shops/{shop_id}/products/{product_id} - Chi tiet san pham */
  get(shopId: string, productId: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/products/${productId}`);
  }
  /** GET /api/v1/shops/{shop_id}/products/{product_sku} - Chi tiet san pham theo SKU */
  getBySku(shopId: string, productSku: string): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/products/${productSku}`);
  }
  /** POST /api/v1/shops/{shop_id}/products - Tao san pham */
  create(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/products`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/products/{product_id} - Cap nhat san pham */
  update(shopId: string, productId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/products/${productId}`, data);
  }
  /** PUT /api/v1/shops/{shop_id}/products/update_hide - An/hien san pham hang loat */
  updateHide(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.put(`/api/v1/shops/${shopId}/products/update_hide`, data);
  }
  /** GET /api/v1/shops/{shop_id}/products/variations - Danh sach bien the */
  listVariations(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/products/variations`, params);
  }
  /** POST /api/v1/shops/{shop_id}/products/get_logistics_shipping_document - Lay chung tu van chuyen */
  getLogisticsShippingDocument(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/products/get_logistics_shipping_document`, data);
  }
  /** GET /api/v1/shops/{shop_id}/materials_products - Danh sach nguyen vat lieu */
  listMaterials(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/materials_products`, params);
  }
  /** GET /api/v1/shops/{shop_id}/product_measurements/get_measure - Lay don vi do luong */
  getMeasure(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/product_measurements/get_measure`, params);
  }
  /** GET /api/v1/shops/{shop_id}/brand - Danh sach thuong hieu */
  listBrands(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/brand`, params);
  }
  /** GET /api/v1/shops/{shop_id}/tags_products - Danh sach nhan san pham */
  listTags(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/tags_products`, params);
  }
  /** POST /api/v1/shops/{shop_id}/tags_products - Tao nhan san pham */
  createTag(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/tags_products`, data);
  }
  /** GET /api/v1/shops/{shop_id}/combo_products - Danh sach san pham combo */
  listCombos(shopId: string, params?: QueryParams): Promise<unknown> {
    return this.http.get(`/api/v1/shops/${shopId}/combo_products`, params);
  }
  /** POST /api/v1/shops/{shop_id}/combo_products - Tao san pham combo */
  createCombo(shopId: string, data: JsonBody): Promise<unknown> {
    return this.http.post(`/api/v1/shops/${shopId}/combo_products`, data);
  }
}
