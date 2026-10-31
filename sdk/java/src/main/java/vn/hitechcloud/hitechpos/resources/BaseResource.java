package vn.hitechcloud.hitechpos.resources;

import vn.hitechcloud.hitechpos.HttpClient;

public abstract class BaseResource {
    protected final HttpClient http;

    public BaseResource(HttpClient http) {
        this.http = http;
    }
}
