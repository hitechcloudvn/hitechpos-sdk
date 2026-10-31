# HiTechPos SDK — ví dụ java

Mẫu sử dụng cơ bản: khởi tạo client, liệt kê cửa hàng/sản phẩm, tạo đơn hàng và kiểm tra chữ ký webhook.

Đặt token trong biến môi trường `HITECHPOS_API_TOKEN` (và `HITECHPOS_WEBHOOK_SECRET` nếu kiểm tra webhook), rồi chạy:

```bash
javac -cp hitechpos-sdk.jar:gson.jar BasicUsage.java && java -cp .:hitechpos-sdk.jar:gson.jar BasicUsage
```

Xem thêm README của SDK tại `../../sdk/java`.
