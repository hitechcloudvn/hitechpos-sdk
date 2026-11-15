# Tài liệu tham chiếu API HiTechPos

> [English](api-reference.md) | **Tiếng Việt**

---

Toàn bộ endpoint của HiTechPos SDK, nhóm theo tài nguyên. Tất cả endpoint dùng tiền tố `/api/v1`, host `https://pos.hitechcloud.vn` (sandbox `https://pos-sandbox.hitechcloud.vn`), xác thực bằng `Authorization: Bearer <API_TOKEN>`.

- **Phân trang:** tham số `page_number` và `page_size` cho mọi endpoint danh sách; `meta.pagination.has_more` cho biết còn trang kế tiếp.
- **Envelope:** mọi phản hồi có dạng `{ "status", "data", "meta" }`.
- Tổng cộng **116 endpoint** trên **21 nhóm tài nguyên**.

Mỗi phương thức SDK tương ứng một endpoint thật dưới đây (ví dụ `client.orders.create` → `POST /api/v1/shops/{shop_id}/orders`).

### Shops — Quản lý cửa hàng (shop) và cấu hình webhook

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops` | Danh sách cửa hàng |
| `GET` | `/api/v1/shops/{shop_id}` | Chi tiết cửa hàng |
| `PUT` | `/api/v1/shops/{shop_id}` | Cập nhật cửa hàng / webhook |

### Products — Sản phẩm, biến thể, danh mục phụ, combo, nhãn

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/products` | Danh sách sản phẩm |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_id}` | Chi tiết sản phẩm |
| `GET` | `/api/v1/shops/{shop_id}/products/{product_sku}` | Chi tiết sản phẩm theo SKU |
| `POST` | `/api/v1/shops/{shop_id}/products` | Tạo sản phẩm |
| `PUT` | `/api/v1/shops/{shop_id}/products/{product_id}` | Cập nhật sản phẩm |
| `PUT` | `/api/v1/shops/{shop_id}/products/update_hide` | Ẩn/hiện sản phẩm hàng loạt |
| `GET` | `/api/v1/shops/{shop_id}/products/variations` | Danh sách biến thể |
| `POST` | `/api/v1/shops/{shop_id}/products/get_logistics_shipping_document` | Lấy chứng từ vận chuyển |
| `GET` | `/api/v1/shops/{shop_id}/materials_products` | Danh sách nguyên vật liệu |
| `GET` | `/api/v1/shops/{shop_id}/product_measurements/get_measure` | Lấy đơn vị đo lường |
| `GET` | `/api/v1/shops/{shop_id}/brand` | Danh sách thương hiệu |
| `GET` | `/api/v1/shops/{shop_id}/tags_products` | Danh sách nhãn sản phẩm |
| `POST` | `/api/v1/shops/{shop_id}/tags_products` | Tạo nhãn sản phẩm |
| `GET` | `/api/v1/shops/{shop_id}/combo_products` | Danh sách sản phẩm combo |
| `POST` | `/api/v1/shops/{shop_id}/combo_products` | Tạo sản phẩm combo |

### Variations — Biến thể sản phẩm và cập nhật tồn kho

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `POST` | `/api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity` | Cập nhật số lượng tồn của 1 biến thể |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_quantity` | Cập nhật số lượng tồn hàng loạt |
| `POST` | `/api/v1/shops/{shop_id}/variations/update_composite_product` | Cập nhật sản phẩm định mức |

### Categories — Danh mục sản phẩm

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/categories` | Danh sách danh mục |
| `POST` | `/api/v1/shops/{shop_id}/categories` | Tạo danh mục |

### Inventory — Tồn kho, lịch sử tồn và lô

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/inventory` | Tồn kho theo kho/chi nhánh |
| `GET` | `/api/v1/shops/{shop_id}/inventory_histories` | Lịch sử biến động tồn kho |
| `GET` | `/api/v1/shops/{shop_id}/lots` | Danh sách lô / hạn sử dụng |

### Warehouses — Kho / chi nhánh

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/warehouses` | Danh sách kho |
| `POST` | `/api/v1/shops/{shop_id}/warehouses` | Tạo kho |
| `PUT` | `/api/v1/shops/{shop_id}/warehouses/{warehouse_id}` | Cập nhật kho |

### Orders — Đơn hàng, trạng thái, vận chuyển, nhãn, nguồn đơn

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/orders` | Danh sách đơn hàng |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Chi tiết đơn hàng |
| `POST` | `/api/v1/shops/{shop_id}/orders` | Tạo đơn hàng |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}` | Cập nhật đơn hàng |
| `PUT` | `/api/v1/shops/{shop_id}/orders/{order_id}/status` | Cập nhật trạng thái đơn hàng |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/messages` | Tin nhắn của đơn hàng |
| `GET` | `/api/v1/shops/{shop_id}/orders/{order_id}/print` | Dữ liệu in đơn hàng |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_tracking_url` | Lấy URL tra cứu vận chuyển |
| `POST` | `/api/v1/shops/{shop_id}/orders/arrange_shipment` | Điều phối giao hàng |
| `POST` | `/api/v1/shops/{shop_id}/orders/get_promotion_advance_active` | Lấy khuyến mãi nâng cao đang áp dụng |
| `POST` | `/api/v1/shops/{shop_id}/orders/{order_id}/trigger_call` | Kích hoạt gọi tự động |
| `GET` | `/api/v1/shops/{shop_id}/order_source` | Danh sách nguồn đơn |
| `GET` | `/api/v1/shops/{shop_id}/orders_returned` | Danh sách đơn trả hàng |
| `POST` | `/api/v1/shops/{shop_id}/orders_returned` | Tạo đơn trả hàng |
| `GET` | `/api/v1/shops/{shop_id}/orders/tags` | Danh sách nhãn đơn |
| `POST` | `/api/v1/shops/{shop_id}/orders/tags` | Tạo nhãn đơn |
| `PUT` | `/api/v1/shops/{shop_id}/orders/tags/{tag_id}` | Cập nhật nhãn đơn |
| `GET` | `/api/v1/shops/{shop_id}/orders/tag_groups` | Danh sách nhóm nhãn đơn |
| `GET` | `/api/v1/shops/{shop_id}/order_call_laters` | Danh sách hẹn gọi lại |
| `POST` | `/api/v1/shops/{shop_id}/order_call_laters` | Tạo hẹn gọi lại |
| `GET` | `/api/v1/shops/{shop_id}/partners` | Danh sách đối tác vận chuyển |
| `GET` | `/api/v1/shops/{shop_id}/projects` | Danh sách dự án |

### Purchases — Phiếu nhập hàng

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/purchases` | Danh sách phiếu nhập |
| `GET` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Chi tiết phiếu nhập |
| `POST` | `/api/v1/shops/{shop_id}/purchases` | Tạo phiếu nhập |
| `PUT` | `/api/v1/shops/{shop_id}/purchases/{purchase_id}` | Cập nhật phiếu nhập |
| `POST` | `/api/v1/shops/{shop_id}/purchases/separate` | Tách phiếu nhập |

### Exports — Phiếu xuất hủy / xuất kho

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/export` | Danh sách phiếu xuất |
| `GET` | `/api/v1/shops/{shop_id}/export/{export_id}` | Chi tiết phiếu xuất |
| `POST` | `/api/v1/shops/{shop_id}/export` | Tạo phiếu xuất |
| `PUT` | `/api/v1/shops/{shop_id}/export/{export_id}` | Cập nhật phiếu xuất |

### Transfers — Chuyển kho

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transfers` | Danh sách phiếu chuyển kho |
| `GET` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Chi tiết phiếu chuyển kho |
| `POST` | `/api/v1/shops/{shop_id}/transfers/multi` | Tạo nhiều phiếu chuyển kho |
| `PUT` | `/api/v1/shops/{shop_id}/transfers/{transfer_id}` | Cập nhật phiếu chuyển kho |
| `GET` | `/api/v1/shops/{shop_id}/transfers/get_status_history/{transfer_id}` | Lịch sử trạng thái chuyển kho |

### Stocktakings — Kiểm kho

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/stocktakings` | Danh sách phiếu kiểm kho |
| `GET` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Chi tiết phiếu kiểm kho |
| `POST` | `/api/v1/shops/{shop_id}/stocktakings` | Tạo phiếu kiểm kho |
| `PUT` | `/api/v1/shops/{shop_id}/stocktakings/{stocktaking_id}` | Cập nhật phiếu kiểm kho |

### Suppliers — Nhà cung cấp

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/suppliers` | Danh sách nhà cung cấp |
| `GET` | `/api/v1/shops/{shop_id}/supplier` | Danh sách nhà cung cấp (rút gọn) |

### Customers — Khách hàng, cấp độ, điểm, ghi chú

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/customers` | Danh sách khách hàng |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Chi tiết khách hàng |
| `POST` | `/api/v1/shops/{shop_id}/customers` | Tạo khách hàng |
| `PUT` | `/api/v1/shops/{shop_id}/customers/{customer_id}` | Cập nhật khách hàng |
| `GET` | `/api/v1/shops/{shop_id}/customers/point_logs` | Lịch sử điểm thưởng |
| `GET` | `/api/v1/shops/{shop_id}/customers/{customer_id}/load_customer_notes` | Ghi chú khách hàng |
| `POST` | `/api/v1/shops/{shop_id}/customers/{customer_id}/create_note` | Tạo ghi chú khách hàng |
| `GET` | `/api/v1/shops/{shop_id}/customer_levels` | Danh sách cấp độ khách hàng |

### Promotions — Khuyến mãi, khuyến mãi nâng cao, voucher

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/promotions` | Danh sách khuyến mãi |
| `GET` | `/api/v1/shops/{shop_id}/promotion_advance` | Danh sách khuyến mãi nâng cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance` | Tạo khuyến mãi nâng cao |
| `PUT` | `/api/v1/shops/{shop_id}/promotion_advance/{promotion_id}` | Cập nhật khuyến mãi nâng cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/create_multi` | Tạo nhiều khuyến mãi nâng cao |
| `POST` | `/api/v1/shops/{shop_id}/promotion_advance/delete_multi` | Xóa nhiều khuyến mãi nâng cao |
| `GET` | `/api/v1/shops/{shop_id}/vouchers` | Danh sách voucher |
| `GET` | `/api/v1/shops/{shop_id}/vouchers/{voucher_id}` | Chi tiết voucher |
| `POST` | `/api/v1/shops/{shop_id}/vouchers` | Tạo voucher |

### Transactions — Sổ quỹ, công nợ, đối soát, chi phí quảng cáo

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/transactions` | Danh sách giao dịch / phiếu thu chi |
| `POST` | `/api/v1/shops/{shop_id}/transactions` | Tạo phiếu thu / chi |
| `POST` | `/api/v1/shops/{shop_id}/adv_costs` | Ghi nhận chi phí quảng cáo |
| `GET` | `/api/v1/shops/{shop_id}/payment_accounts/get_payment_histories` | Lịch sử thanh toán tài khoản |
| `GET` | `/api/v1/shops/{shop_id}/bank_payments` | Giao dịch ngân hàng |
| `GET` | `/api/v1/shops/{shop_id}/debt` | Công nợ |
| `GET` | `/api/v1/shops/{shop_id}/reconciliations` | Đối soát |

### Analytics — Báo cáo bán hàng, tồn kho, khách hàng

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/analytics/sale` | Báo cáo doanh thu |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_list_formula` | Danh sách công thức |
| `GET` | `/api/v1/shops/{shop_id}/analytics/get_analytic_fields` | Danh sách trường phân tích |
| `GET` | `/api/v1/shops/{shop_id}/statistic_custom/folders` | Thư mục thống kê tùy chỉnh |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_variation` | Phân tích tồn theo biến thể |
| `GET` | `/api/v1/shops/{shop_id}/inventory_analytics/inventory_by_product` | Phân tích tồn theo sản phẩm |
| `GET` | `/api/v1/shops/{shop_id}/customer_analytics/report` | Báo cáo khách hàng |

### Ads — Trình quản lý quảng cáo

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_accounts` | Danh sách tài khoản quảng cáo |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/campaigns_v2` | Danh sách chiến dịch |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ad_sets_v2` | Danh sách nhóm quảng cáo |
| `GET` | `/api/v1/shops/{shop_id}/ads_manager/ads_v2` | Danh sách quảng cáo |

### Marketplace — Sàn TMĐT Shopee / Lazada / TikTok và livestream

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/marketplace/get_account_info` | Thông tin tài khoản sàn |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/products` | Sản phẩm trên sàn |
| `GET` | `/api/v1/shops/{shop_id}/marketplace/reverse_order` | Đơn hoàn trên sàn |
| `GET` | `/api/v1/shops/{shop_id}/shopee/evaluate` | Đánh giá Shopee |
| `GET` | `/api/v1/shops/{shop_id}/livestream_manager` | Quản lý livestream |

### EInvoices — Hóa đơn điện tử

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/list_einvoices` | Danh sách hóa đơn điện tử |

### Users — Nhân viên / người dùng của cửa hàng

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/shops/{shop_id}/users` | Danh sách nhân viên |

### Geo — Địa giới hành chính (tỉnh / huyện / xã)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/v1/geo/provinces` | Danh sách tỉnh / thành |
| `GET` | `/api/v1/geo/districts` | Danh sách quận / huyện |
| `GET` | `/api/v1/geo/communes` | Danh sách phường / xã |
