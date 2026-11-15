import {
  HiTechPos,
  HiTechPosError,
  verifySignature,
} from "@hitechcloudvn/hitechpos-sdk";

async function main(): Promise<void> {
  const client = new HiTechPos({ token: process.env.HITECHPOS_API_TOKEN });

  // 1. List accessible shops.
  const shops = (await client.shops.list()) as { data: Array<{ id: string }> };
  const shopId = shops.data[0].id;
  console.log("Shop:", shopId);

  // 2. List products (single page).
  const products = (await client.products.list(shopId, {
    page_number: 1,
    page_size: 20,
  })) as { data: unknown[] };
  console.log("Products on page 1:", products.data.length);

  // 3. Create an order.
  try {
    const order = (await client.orders.create(shopId, {
      customer: { name: "Nguyen Van A", phone: "0900000000" },
      items: [{ variation_id: "var_123", quantity: 2, price: 150000 }],
      warehouse_id: "wh_1",
    })) as { data: { id: string } };
    console.log("Created order:", order.data.id);
  } catch (err) {
    if (err instanceof HiTechPosError) {
      console.error("API error:", err.statusCode, err.message);
    } else {
      throw err;
    }
  }

  // 4. Verify a webhook signature inside your receiver.
  const secret = process.env.HITECHPOS_WEBHOOK_SECRET ?? "";
  const rawBody = '{"event":"order.created"}';
  const signature = "..."; // from X-HitechPos-Signature header
  if (verifySignature(secret, rawBody, signature)) {
    console.log("Webhook signature OK");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
