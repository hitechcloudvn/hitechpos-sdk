# HiTechPos API reference

> **English** | [Tiếng Việt](api-reference.vi.md)

---

Every HiTechPos SDK endpoint, grouped by resource. All endpoints use the `/api/v1`
prefix on host `https://pos.hitechcloud.vn` (sandbox `https://pos-sandbox.hitechcloud.vn`)
and authenticate with `Authorization: Bearer <API_TOKEN>`.

- **Pagination:** the `page_number` and `page_size` parameters apply to every list
  endpoint; `meta.pagination.has_more` signals that a next page exists.
- **Envelope:** every response has the shape `{ "status", "data", "meta" }`.
- A total of **116 endpoints** across **21 resource groups**.

Each SDK method maps to exactly one real endpoint below (for example
`client.orders.create` → `POST /api/v1/shops/{shop_id}/orders`).

### Shops — Shop management and webhook configuration

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops` | List shops |
| `GET` | `/api/v1/shops/{shop_id}` | Shop detail |
| `PUT` | `/api/v1/shops/{shop_id}` | Update shop / webhook |

### Products — Products, variations, sub-categories, combos, tags

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/products` | List products |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_id}` | Product detail |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_sku}` | Product detail by SKU |
| `POST` | `/api/v1/shops/{shop_id}/products` | Create product |
| `PUT` | `/api/v1/shops/{shop_id}/products/{product_id}` | Update product |
| `PUT` | `/api/v1/shops/{shop_id}/products/update_hide` | Bulk show/hide products |
| `GET` | `/api/v1/shops/{shop_id}/products/variations` | List variations |
| `POST` | `/api/v1/shops/{shop_id}/products/get_logistics_shipping_document` | Get shipping documents |
| `GET` | `/api/v1/shops/{shop_id}/materials_products` | List materials |
| `GET` | `/api/v1/shops/{shop_id}/product_measurements/get_measure` | Get units of measure |
| `GET` | `/api/v1/shops/{shop_id}/brand` | List brands |
| `GET` | `/api/v1/shops/{shop_id}/tags_products` | List product tags |
| `POST` | `/api/v1/shops/{shop_id}/tags_products` | Create product tag |
| `GET` | `/api/v1/shops/{shop_id}/combo_products` | List combo products |
| `POST` | `/api/v1/shops/{shop_id}/combo_products` | Create combo product |

### Variations — Product variations and stock updates

| Method | Endpoint | Description |
|--------|----------|-------|
| `POST` | `/api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity` | Update stock quantity of one variation |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_quantity` | Bulk update stock quantity |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_composite_product` | Update composite (BOM) product |

### Categories — Product categories

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/categories` | List categories |
| `POST` | `/api/v1/shops/{shop_id}/categories` | Create category |

### Inventory — Stock, stock history and lots

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/inventory` | Stock by warehouse / branch |
| `GET` | `/api/v1/shops/{shop_id}/inventory_histories` | Stock movement history |
| `GET` | `/api/v1/shops/{shop_id}/lots` | List lots / expiry dates |

### Warehouses — Warehouses / branches

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/warehouses` | List warehouses |
| `POST` | `/api/v1/shops/{shop_id}/warehouses` | Create warehouse |
| `PUT` | `/api/v1/shops/{shop_id}/warehouses/{warehouse_id}` | Update warehouse |

### Orders — Orders, status, shipment, tags, order sources

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/orders` | List orders |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Order detail |
| `POST` | `/api/v1/shops/{shop_id}/orders` | Create order |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Update order |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}/status` | Update order status |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/messages` | Order messages |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/print` | Order print data |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_tracking_url` | Get shipment tracking URL |
| `POST` | `/api/v1/shops/{shop_id}/orders/arrange_shipment` | Arrange shipment |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_promotion_advance_active` | Get active advanced promotions |
| `POST` | `/api/v1/shops/{shop_id}/orders/{order_id}/trigger_call` | Trigger automatic call |
| `GET` | `/api/v1/shops/{shop_id}/order_source` | List order sources |
| `GET` | `/api/v1/shops/{shop_id}/orders_returned` | List return orders |
| `POST` | `/api/v1/shops/{shop_id}/orders_returned` | Create return order |
| `GET` | `/api/v1/shops/{shop_id}/orders/tags` | List order tags |
| `POST` | `/api/v1/shops/{shop_id}/orders/tags` | Create order tag |
| `PUT` | `/api/v1/shops/{shop_id}/orders/tags/{tag_id}` | Update order tag |
| `GET` | `/api/v1/shops/{shop_id}/orders/tag_groups` | List order tag groups |
| `GET` | `/api/v1/shops/{shop_id}/order_call_laters` | List scheduled callbacks |
| `POST` | `/api/v1/shops/{shop_id}/order_call_laters` | Create scheduled callback |
| `GET` | `/api/v1/shops/{shop_id}/partners` | List shipping partners |
| `GET` | `/api/v1/shops/{shop_id}/projects` | List projects |

### Purchases — Purchase (goods-in) slips

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/purchases` | List purchase slips |
| `GET` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Purchase slip detail |
| `POST` | `/api/v1/shops/{shop_id}/purchases` | Create purchase slip |
| `PUT` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Update purchase slip |
| `POST` | `/api/v1/shops/{shop_id}/purchases/separate` | Split purchase slip |

### Exports — Export / write-off slips

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/export` | List export slips |
| `GET` | `/api/v1/shops/{shop_id}/export/{export_id}` | Export slip detail |
| `POST` | `/api/v1/shops/{shop_id}/export` | Create export slip |
| `PUT` | `/api/v1/shops/{shop_id}/export/{export_id}` | Update export slip |

### Transfers — Stock transfers

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transfers` | List transfer slips |
| `GET` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Transfer slip detail |
| `POST` | `/api/v1/shops/{shop_id}/transfers/multi` | Create multiple transfer slips |
| `PUT` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Update transfer slip |
| `GET` | `/api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id}` | Transfer status history |

### Stocktakings — Stocktakes

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/stocktakings` | List stocktaking slips |
| `GET` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Stocktaking slip detail |
| `POST` | `/api/v1/shops/{shop_id}/stocktakings` | Create stocktaking slip |
| `PUT` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Update stocktaking slip |

### Suppliers — Suppliers

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/suppliers` | List suppliers |
| `GET` | `/api/v1/shops/{shop_id}/supplier` | List suppliers (compact) |

### Customers — Customers, levels, points, notes

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/customers` | List customers |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Customer detail |
| `POST` | `/api/v1/shops/{shop_id}/customers` | Create customer |
| `PUT` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Update customer |
| `GET` | `/api/v1/shops/{shop_id}/customers/point_logs` | Loyalty point history |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes` | Customer notes |
| `POST` | `/api/v1/shops/{shop_id}/customers/{customer_id}/create_note` | Create customer note |
| `GET` | `/api/v1/shops/{shop_id}/customer_levels` | List customer levels |

### Promotions — Promotions, advanced promotions, vouchers

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/promotions` | List promotions |
| `GET` | `/api/v1/shops/{shop_id}/promotion_advance` | List advanced promotions |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance` | Create advanced promotion |
| `PUT` | `/api/v1/shops/{shop_id}/promotion_advance/{promotion_id}` | Update advanced promotion |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/create_multi` | Create multiple advanced promotions |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/delete_multi` | Delete multiple advanced promotions |
| `GET` | `/api/v1/shops/{shop_id}/vouchers` | List vouchers |
| `GET` | `/api/v1/shops/{shop_id}/vouchers/{voucher_id}` | Voucher detail |
| `POST` | `/api/v1/shops/{shop_id}/vouchers` | Create voucher |

### Transactions — Cash book, debt, reconciliation, ad costs

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transactions` | List transactions / receipt-payment slips |
| `POST` | `/api/v1/shops/{shop_id}/transactions` | Create receipt / payment slip |
| `POST` | `/api/v1/shops/{shop_id}/adv_costs` | Record advertising costs |
| `GET` | `/api/v1/shops/{shop_id}/payment_accounts/get_payment_histories` | Account payment history |
| `GET` | `/api/v1/shops/{shop_id}/bank_payments` | Bank transactions |
| `GET` | `/api/v1/shops/{shop_id}/debt` | Debt |
| `GET` | `/api/v1/shops/{shop_id}/reconciliations` | Reconciliation |

### Analytics — Sales, inventory and customer reports

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/analytics/sale` | Revenue report |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_list_formula` | List formulas |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_analytic_fields` | List analytics fields |
| `GET` | `/api/v1/shops/{shop_id}/statistic_custom/folders` | Custom statistics folders |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation` | Inventory analysis by variation |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product` | Inventory analysis by product |
| `GET` | `/api/v1/shops/{shop_id}/customer_analytics/report` | Customer report |

### Ads — Ads manager

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_accounts` | List ad accounts |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/campaigns_v2` | List campaigns |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_sets_v2` | List ad sets |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ads_v2` | List ads |

### Marketplace — Shopee / Lazada / TikTok marketplaces and livestream

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/marketplace/get_account_info` | Marketplace account info |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/products` | Products on marketplace |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/reverse_order` | Marketplace return orders |
| `GET` | `/api/v1/shops/{shop_id}/shopee/evaluate` | Shopee reviews |
| `GET` | `/api/v1/shops/{shop_id}/livestream_manager` | Livestream management |

### EInvoices — E-invoices

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/list_einvoices` | List e-invoices |

### Users — Shop staff

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/users` | List staff |

### Geo — Administrative divisions (province / district / commune)

| Method | Endpoint | Description |
|--------|----------|-------|
| `GET` | `/api/v1/geo/provinces` | List provinces |
| `GET` | `/api/v1/geo/districts` | List districts |
| `GET` | `/api/v1/geo/communes` | List communes |
