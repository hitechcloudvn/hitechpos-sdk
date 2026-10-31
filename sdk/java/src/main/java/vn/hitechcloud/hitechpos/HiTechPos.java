package vn.hitechcloud.hitechpos;

import java.util.Map;
import vn.hitechcloud.hitechpos.resources.*;

public class HiTechPos {
    public static final String PRODUCTION_URL = "https://pos.hitechcloud.vn";
    public static final String SANDBOX_URL = "https://pos-sandbox.hitechcloud.vn";
    public static final String VERSION = "1.0.0";

    private final HttpClient httpClient;
    private final Shops shops;
    private final Products products;
    private final Variations variations;
    private final Categories categories;
    private final Inventory inventory;
    private final Warehouses warehouses;
    private final Orders orders;
    private final Purchases purchases;
    private final Exports exports;
    private final Transfers transfers;
    private final Stocktakings stocktakings;
    private final Suppliers suppliers;
    private final Customers customers;
    private final Promotions promotions;
    private final Transactions transactions;
    private final Analytics analytics;
    private final Ads ads;
    private final Marketplace marketplace;
    private final EInvoices einvoices;
    private final Users users;
    private final Geo geo;

    public HiTechPos(String token) {
        this(token, PRODUCTION_URL, 30, 3);
    }

    public HiTechPos(String token, String baseUrl, int timeout, int maxRetries) {
        this.httpClient = new HttpClient(baseUrl, token, timeout, maxRetries);
        this.shops = new Shops(httpClient);
        this.products = new Products(httpClient);
        this.variations = new Variations(httpClient);
        this.categories = new Categories(httpClient);
        this.inventory = new Inventory(httpClient);
        this.warehouses = new Warehouses(httpClient);
        this.orders = new Orders(httpClient);
        this.purchases = new Purchases(httpClient);
        this.exports = new Exports(httpClient);
        this.transfers = new Transfers(httpClient);
        this.stocktakings = new Stocktakings(httpClient);
        this.suppliers = new Suppliers(httpClient);
        this.customers = new Customers(httpClient);
        this.promotions = new Promotions(httpClient);
        this.transactions = new Transactions(httpClient);
        this.analytics = new Analytics(httpClient);
        this.ads = new Ads(httpClient);
        this.marketplace = new Marketplace(httpClient);
        this.einvoices = new EInvoices(httpClient);
        this.users = new Users(httpClient);
        this.geo = new Geo(httpClient);
    }

    public void setToken(String token) { httpClient.setToken(token); }

    public Shops shops() { return shops; }
    public Products products() { return products; }
    public Variations variations() { return variations; }
    public Categories categories() { return categories; }
    public Inventory inventory() { return inventory; }
    public Warehouses warehouses() { return warehouses; }
    public Orders orders() { return orders; }
    public Purchases purchases() { return purchases; }
    public Exports exports() { return exports; }
    public Transfers transfers() { return transfers; }
    public Stocktakings stocktakings() { return stocktakings; }
    public Suppliers suppliers() { return suppliers; }
    public Customers customers() { return customers; }
    public Promotions promotions() { return promotions; }
    public Transactions transactions() { return transactions; }
    public Analytics analytics() { return analytics; }
    public Ads ads() { return ads; }
    public Marketplace marketplace() { return marketplace; }
    public EInvoices einvoices() { return einvoices; }
    public Users users() { return users; }
    public Geo geo() { return geo; }
}
