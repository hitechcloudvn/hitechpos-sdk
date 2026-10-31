import { HTTPClient } from "../http-client";

export abstract class BaseResource {
  protected http: HTTPClient;
  constructor(http: HTTPClient) {
    this.http = http;
  }
}
