package vn.hitechcloud.hitechpos.resources;

import java.util.Map;
import vn.hitechcloud.hitechpos.HttpClient;

/** Dia gioi hanh chinh (tinh / huyen / xa). */
public class Geo extends BaseResource {
    public Geo(HttpClient http) { super(http); }

    /** GET /api/v1/geo/provinces - Danh sach tinh / thanh */
    public Map<String, Object> provinces(Map<String, String> params) {
        return http.get("/api/v1/geo/provinces", params);
    }

    /** GET /api/v1/geo/districts - Danh sach quan / huyen */
    public Map<String, Object> districts(Map<String, String> params) {
        return http.get("/api/v1/geo/districts", params);
    }

    /** GET /api/v1/geo/communes - Danh sach phuong / xa */
    public Map<String, Object> communes(Map<String, String> params) {
        return http.get("/api/v1/geo/communes", params);
    }

}