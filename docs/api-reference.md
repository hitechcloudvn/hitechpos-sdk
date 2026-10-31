# Tài liệu tham chiếu API HiTechPos

Toàn bộ endpoint của HiTechPos SDK, nhóm theo tài nguyên. Tất cả endpoint dùng tiền tố `/api/v1`, host `https://pos.hitechcloud.vn` (sandbox `https://pos-sandbox.hitechcloud.vn`), xác thực bằng `Authorization: Bearer <API_TOKEN>`.

- **Phân trang:** tham số `page_number` và `page_size` cho mọi endpoint danh sách; `meta.pagination.has_more` cho biết còn trang kế tiếp.
- **Envelope:** mọi phản hồi có dạng `{ "status", "data", "meta" }`.
- Tổng cộng **116 endpoint** trên **21 nhóm tài nguyên**.

Mỗi phương thức SDK tương ứng một endpoint thật dưới đây (ví dụ `client.orders.create` → `POST /api/v1/shops/{shop_id}/orders`).

### Shops — Quan ly cua hang (shop) va cau hinh webhook

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops` | Danh sach cua hang |
| `GET` | `/api/v1/shops/{shop_id}` | Chi tiet cua hang |
| `PUT` | `/api/v1/shops/{shop_id}` | Cap nhat cua hang / webhook |

### Products — San pham, bien the, danh muc phu, combo, nhan

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/products` | Danh sach san pham |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_id}` | Chi tiet san pham |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_sku}` | Chi tiet san pham theo SKU |
| `POST` | `/api/v1/shops/{shop_id}/products` | Tao san pham |
| `PUT` | `/api/v1/shops/{shop_id}/products/{product_id}` | Cap nhat san pham |
| `PUT` | `/api/v1/shops/{shop_id}/products/update_hide` | An/hien san pham hang loat |
| `GET` | `/api/v1/shops/{shop_id}/products/variations` | Danh sach bien the |
| `POST` | `/api/v1/shops/{shop_id}/products/get_logistics_shipping_document` | Lay chung tu van chuyen |
| `GET` | `/api/v1/shops/{shop_id}/materials_products` | Danh sach nguyen vat lieu |
| `GET` | `/api/v1/shops/{shop_id}/product_measurements/get_measure` | Lay don vi do luong |
| `GET` | `/api/v1/shops/{shop_id}/brand` | Danh sach thuong hieu |
| `GET` | `/api/v1/shops/{shop_id}/tags_products` | Danh sach nhan san pham |
| `POST` | `/api/v1/shops/{shop_id}/tags_products` | Tao nhan san pham |
| `GET` | `/api/v1/shops/{shop_id}/combo_products` | Danh sach san pham combo |
| `POST` | `/api/v1/shops/{shop_id}/combo_products` | Tao san pham combo |

### Variations — Bien the san pham va cap nhat ton kho

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `POST` | `/api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity` | Cap nhat so luong ton cua 1 bien the |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_quantity` | Cap nhat so luong ton hang loat |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_composite_product` | Cap nhat san pham dinh muc |

### Categories — Danh muc san pham

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/categories` | Danh sach danh muc |
| `POST` | `/api/v1/shops/{shop_id}/categories` | Tao danh muc |

### Inventory — Ton kho, lich su ton va lo

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/inventory` | Ton kho theo kho/chi nhanh |
| `GET` | `/api/v1/shops/{shop_id}/inventory_histories` | Lich su bien dong ton kho |
| `GET` | `/api/v1/shops/{shop_id}/lots` | Danh sach lo / han su dung |

### Warehouses — Kho / chi nhanh

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/warehouses` | Danh sach kho |
| `POST` | `/api/v1/shops/{shop_id}/warehouses` | Tao kho |
| `PUT` | `/api/v1/shops/{shop_id}/warehouses/{warehouse_id}` | Cap nhat kho |

### Orders — Don hang, trang thai, van chuyen, nhan, nguon don

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/orders` | Danh sach don hang |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Chi tiet don hang |
| `POST` | `/api/v1/shops/{shop_id}/orders` | Tao don hang |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Cap nhat don hang |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}/status` | Cap nhat trang thai don hang |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/messages` | Tin nhan cua don hang |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/print` | Du lieu in don hang |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_tracking_url` | Lay URL tra cuu van chuyen |
| `POST` | `/api/v1/shops/{shop_id}/orders/arrange_shipment` | Dieu phoi giao hang |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_promotion_advance_active` | Lay khuyen mai nang cao dang ap dung |
| `POST` | `/api/v1/shops/{shop_id}/orders/{order_id}/trigger_call` | Kich hoat goi tu dong |
| `GET` | `/api/v1/shops/{shop_id}/order_source` | Danh sach nguon don |
| `GET` | `/api/v1/shops/{shop_id}/orders_returned` | Danh sach don tra hang |
| `POST` | `/api/v1/shops/{shop_id}/orders_returned` | Tao don tra hang |
| `GET` | `/api/v1/shops/{shop_id}/orders/tags` | Danh sach nhan don |
| `POST` | `/api/v1/shops/{shop_id}/orders/tags` | Tao nhan don |
| `PUT` | `/api/v1/shops/{shop_id}/orders/tags/{tag_id}` | Cap nhat nhan don |
| `GET` | `/api/v1/shops/{shop_id}/orders/tag_groups` | Danh sach nhom nhan don |
| `GET` | `/api/v1/shops/{shop_id}/order_call_laters` | Danh sach hen goi lai |
| `POST` | `/api/v1/shops/{shop_id}/order_call_laters` | Tao hen goi lai |
| `GET` | `/api/v1/shops/{shop_id}/partners` | Danh sach doi tac van chuyen |
| `GET` | `/api/v1/shops/{shop_id}/projects` | Danh sach du an |

### Purchases — Phieu nhap hang

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/purchases` | Danh sach phieu nhap |
| `GET` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Chi tiet phieu nhap |
| `POST` | `/api/v1/shops/{shop_id}/purchases` | Tao phieu nhap |
| `PUT` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Cap nhat phieu nhap |
| `POST` | `/api/v1/shops/{shop_id}/purchases/separate` | Tach phieu nhap |

### Exports — Phieu xuat huy / xuat kho

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/export` | Danh sach phieu xuat |
| `GET` | `/api/v1/shops/{shop_id}/export/{export_id}` | Chi tiet phieu xuat |
| `POST` | `/api/v1/shops/{shop_id}/export` | Tao phieu xuat |
| `PUT` | `/api/v1/shops/{shop_id}/export/{export_id}` | Cap nhat phieu xuat |

### Transfers — Chuyen kho

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transfers` | Danh sach phieu chuyen kho |
| `GET` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Chi tiet phieu chuyen kho |
| `POST` | `/api/v1/shops/{shop_id}/transfers/multi` | Tao nhieu phieu chuyen kho |
| `PUT` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Cap nhat phieu chuyen kho |
| `GET` | `/api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id}` | Lich su trang thai chuyen kho |

### Stocktakings — Kiem kho

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/stocktakings` | Danh sach phieu kiem kho |
| `GET` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Chi tiet phieu kiem kho |
| `POST` | `/api/v1/shops/{shop_id}/stocktakings` | Tao phieu kiem kho |
| `PUT` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Cap nhat phieu kiem kho |

### Suppliers — Nha cung cap

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/suppliers` | Danh sach nha cung cap |
| `GET` | `/api/v1/shops/{shop_id}/supplier` | Danh sach nha cung cap (rut gon) |

### Customers — Khach hang, cap do, diem, ghi chu

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/customers` | Danh sach khach hang |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Chi tiet khach hang |
| `POST` | `/api/v1/shops/{shop_id}/customers` | Tao khach hang |
| `PUT` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Cap nhat khach hang |
| `GET` | `/api/v1/shops/{shop_id}/customers/point_logs` | Lich su diem thuong |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes` | Ghi chu khach hang |
| `POST` | `/api/v1/shops/{shop_id}/customers/{customer_id}/create_note` | Tao ghi chu khach hang |
| `GET` | `/api/v1/shops/{shop_id}/customer_levels` | Danh sach cap do khach hang |

### Promotions — Khuyen mai, khuyen mai nang cao, voucher

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/promotions` | Danh sach khuyen mai |
| `GET` | `/api/v1/shops/{shop_id}/promotion_advance` | Danh sach khuyen mai nang cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance` | Tao khuyen mai nang cao |
| `PUT` | `/api/v1/shops/{shop_id}/promotion_advance/{promotion_id}` | Cap nhat khuyen mai nang cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/create_multi` | Tao nhieu khuyen mai nang cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/delete_multi` | Xoa nhieu khuyen mai nang cao |
| `GET` | `/api/v1/shops/{shop_id}/vouchers` | Danh sach voucher |
| `GET` | `/api/v1/shops/{shop_id}/vouchers/{voucher_id}` | Chi tiet voucher |
| `POST` | `/api/v1/shops/{shop_id}/vouchers` | Tao voucher |

### Transactions — So quy, cong no, doi soat, chi phi quang cao

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transactions` | Danh sach giao dich / phieu thu chi |
| `POST` | `/api/v1/shops/{shop_id}/transactions` | Tao phieu thu / chi |
| `POST` | `/api/v1/shops/{shop_id}/adv_costs` | Ghi nhan chi phi quang cao |
| `GET` | `/api/v1/shops/{shop_id}/payment_accounts/get_payment_histories` | Lich su thanh toan tai khoan |
| `GET` | `/api/v1/shops/{shop_id}/bank_payments` | Giao dich ngan hang |
| `GET` | `/api/v1/shops/{shop_id}/debt` | Cong no |
| `GET` | `/api/v1/shops/{shop_id}/reconciliations` | Doi soat |

### Analytics — Bao cao ban hang, ton kho, khach hang

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/analytics/sale` | Bao cao doanh thu |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_list_formula` | Danh sach cong thuc |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_analytic_fields` | Danh sach truong phan tich |
| `GET` | `/api/v1/shops/{shop_id}/statistic_custom/folders` | Thu muc thong ke tuy chinh |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation` | Phan tich ton theo bien the |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product` | Phan tich ton theo san pham |
| `GET` | `/api/v1/shops/{shop_id}/customer_analytics/report` | Bao cao khach hang |

### Ads — Trinh quan ly quang cao

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_accounts` | Danh sach tai khoan quang cao |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/campaigns_v2` | Danh sach chien dich |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_sets_v2` | Danh sach nhom quang cao |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ads_v2` | Danh sach quang cao |

### Marketplace — San TMDT Shopee / Lazada / TikTok va livestream

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/marketplace/get_account_info` | Thong tin tai khoan san |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/products` | San pham tren san |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/reverse_order` | Don hoan tren san |
| `GET` | `/api/v1/shops/{shop_id}/shopee/evaluate` | Danh gia Shopee |
| `GET` | `/api/v1/shops/{shop_id}/livestream_manager` | Quan ly livestream |

### EInvoices — Hoa don dien tu

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/list_einvoices` | Danh sach hoa don dien tu |

### Users — Nhan vien / nguoi dung cua cua hang

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/users` | Danh sach nhan vien |

### Geo — Dia gioi hanh chinh (tinh / huyen / xa)

| Method | Endpoint | Mo ta |
|--------|----------|-------|
| `GET` | `/api/v1/geo/provinces` | Danh sach tinh / thanh |
| `GET` | `/api/v1/geo/districts` | Danh sach quan / huyen |
| `GET` | `/api/v1/geo/communes` | Danh sach phuong / xa |

