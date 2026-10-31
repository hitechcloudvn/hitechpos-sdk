import vn.hitechcloud.hitechpos.HiTechPos;
import vn.hitechcloud.hitechpos.HiTechPosException;
import vn.hitechcloud.hitechpos.Webhook;

import java.util.List;
import java.util.Map;

public class BasicUsage {
    public static void main(String[] args) {
        HiTechPos client = new HiTechPos(System.getenv("HITECHPOS_API_TOKEN"));

        // 1. List accessible shops.
        Map<String, Object> shops = client.shops().list(null);
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> shopList = (List<Map<String, Object>>) shops.get("data");
        String shopId = shopList.get(0).get("id").toString();
        System.out.println("Shop: " + shopId);

        // 2. List products (single page).
        Map<String, Object> products = client.products().list(shopId, Map.of(
                "page_number", "1",
                "page_size", "20"
        ));
        System.out.println("Products: " + products.get("data"));

        // 3. Create an order.
        try {
            Map<String, Object> order = client.orders().create(shopId, Map.of(
                    "customer", Map.of("name", "Nguyen Van A", "phone", "0900000000"),
                    "warehouse_id", "wh_1",
                    "items", List.of(Map.of("variation_id", "var_123", "quantity", 2, "price", 150000))
            ));
            System.out.println("Created order: " + order.get("data"));
        } catch (HiTechPosException e) {
            System.err.println("API error: " + e.getStatusCode() + " " + e.getMessage());
        }

        // 4. Verify a webhook signature inside your receiver.
        String secret = System.getenv("HITECHPOS_WEBHOOK_SECRET");
        String rawBody = "{\"event\":\"order.created\"}";
        String signature = "..."; // from X-HitechPos-Signature header
        if (Webhook.verifySignature(secret, rawBody, signature)) {
            System.out.println("Webhook signature OK");
        }
    }
}
