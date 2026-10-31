import { BaseResource } from "./base";
import { QueryParams, JsonBody } from "../http-client";


/** Dia gioi hanh chinh (tinh / huyen / xa). */
export class GeoResource extends BaseResource {
  /** GET /api/v1/geo/provinces - Danh sach tinh / thanh */
  provinces(params?: QueryParams): Promise<unknown> {
    return this.http.get("/api/v1/geo/provinces", params);
  }
  /** GET /api/v1/geo/districts - Danh sach quan / huyen */
  districts(params?: QueryParams): Promise<unknown> {
    return this.http.get("/api/v1/geo/districts", params);
  }
  /** GET /api/v1/geo/communes - Danh sach phuong / xa */
  communes(params?: QueryParams): Promise<unknown> {
    return this.http.get("/api/v1/geo/communes", params);
  }
}
