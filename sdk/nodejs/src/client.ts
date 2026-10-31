import { HTTPClient } from "./http-client";
import { ShopsResource } from "./resources/shops";
import { ProductsResource } from "./resources/products";
import { VariationsResource } from "./resources/variations";
import { CategoriesResource } from "./resources/categories";
import { InventoryResource } from "./resources/inventory";
import { WarehousesResource } from "./resources/warehouses";
import { OrdersResource } from "./resources/orders";
import { PurchasesResource } from "./resources/purchases";
import { ExportsResource } from "./resources/exports";
import { TransfersResource } from "./resources/transfers";
import { StocktakingsResource } from "./resources/stocktakings";
import { SuppliersResource } from "./resources/suppliers";
import { CustomersResource } from "./resources/customers";
import { PromotionsResource } from "./resources/promotions";
import { TransactionsResource } from "./resources/transactions";
import { AnalyticsResource } from "./resources/analytics";
import { AdsResource } from "./resources/ads";
import { MarketplaceResource } from "./resources/marketplace";
import { EInvoicesResource } from "./resources/einvoices";
import { UsersResource } from "./resources/users";
import { GeoResource } from "./resources/geo";

export interface HiTechPosOptions {
  token?: string;
  baseUrl?: string;
  timeout?: number;
  maxRetries?: number;
}

export const PRODUCTION_URL = "https://pos.hitechcloud.vn";
export const SANDBOX_URL = "https://pos-sandbox.hitechcloud.vn";

export class HiTechPos {
  private http: HTTPClient;
  readonly shops: ShopsResource;
  readonly products: ProductsResource;
  readonly variations: VariationsResource;
  readonly categories: CategoriesResource;
  readonly inventory: InventoryResource;
  readonly warehouses: WarehousesResource;
  readonly orders: OrdersResource;
  readonly purchases: PurchasesResource;
  readonly exports: ExportsResource;
  readonly transfers: TransfersResource;
  readonly stocktakings: StocktakingsResource;
  readonly suppliers: SuppliersResource;
  readonly customers: CustomersResource;
  readonly promotions: PromotionsResource;
  readonly transactions: TransactionsResource;
  readonly analytics: AnalyticsResource;
  readonly ads: AdsResource;
  readonly marketplace: MarketplaceResource;
  readonly einvoices: EInvoicesResource;
  readonly users: UsersResource;
  readonly geo: GeoResource;

  constructor(options: HiTechPosOptions = {}) {
    const {
      token,
      baseUrl = PRODUCTION_URL,
      timeout = 30000,
      maxRetries = 3,
    } = options;
    this.http = new HTTPClient(baseUrl, token, timeout, maxRetries);
    this.shops = new ShopsResource(this.http);
    this.products = new ProductsResource(this.http);
    this.variations = new VariationsResource(this.http);
    this.categories = new CategoriesResource(this.http);
    this.inventory = new InventoryResource(this.http);
    this.warehouses = new WarehousesResource(this.http);
    this.orders = new OrdersResource(this.http);
    this.purchases = new PurchasesResource(this.http);
    this.exports = new ExportsResource(this.http);
    this.transfers = new TransfersResource(this.http);
    this.stocktakings = new StocktakingsResource(this.http);
    this.suppliers = new SuppliersResource(this.http);
    this.customers = new CustomersResource(this.http);
    this.promotions = new PromotionsResource(this.http);
    this.transactions = new TransactionsResource(this.http);
    this.analytics = new AnalyticsResource(this.http);
    this.ads = new AdsResource(this.http);
    this.marketplace = new MarketplaceResource(this.http);
    this.einvoices = new EInvoicesResource(this.http);
    this.users = new UsersResource(this.http);
    this.geo = new GeoResource(this.http);
  }

  setToken(token: string): void {
    this.http.setToken(token);
  }
}
