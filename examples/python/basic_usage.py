"""HiTechPos Python SDK - basic usage."""

import os

from hitechpos import HiTechPos, HiTechPosError, verify_signature

client = HiTechPos(token=os.environ["HITECHPOS_API_TOKEN"])

# 1. List the shops this token can access.
shops = client.shops.list()
shop_id = shops["data"][0]["id"]
print("Shop:", shop_id)

# 2. List products (single page).
products = client.products.list(shop_id, params={"page_number": 1, "page_size": 20})
print("Products on page 1:", len(products["data"]))

# 3. Iterate every product across all pages via the pagination helper.
for product in client._http.paginate(f"/api/v1/shops/{shop_id}/products"):
    print(" -", product.get("name"))

# 4. Create an order.
try:
    order = client.orders.create(shop_id, {
        "customer": {"name": "Nguyen Van A", "phone": "0900000000"},
        "items": [{"variation_id": "var_123", "quantity": 2, "price": 150000}],
        "warehouse_id": "wh_1",
    })
    print("Created order:", order["data"]["id"])
except HiTechPosError as exc:
    print("API error:", exc.status_code, exc.message)

# 5. Verify a webhook signature (in your webhook receiver).
secret = os.environ.get("HITECHPOS_WEBHOOK_SECRET", "")
raw_body = b'{"event":"order.created"}'
incoming_signature = "..."  # from X-HitechPos-Signature header
if verify_signature(secret, raw_body, incoming_signature):
    print("Webhook signature OK")
