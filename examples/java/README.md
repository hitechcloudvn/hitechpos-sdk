# HiTechPos SDK — Java example

> **English** | [Tiếng Việt](README.vi.md)

---

Basic usage sample: create a client, list shops/products, create an order, and verify a
webhook signature.

Put the token in the `HITECHPOS_API_TOKEN` environment variable (and
`HITECHPOS_WEBHOOK_SECRET` if you verify webhooks), then run:

```bash
javac -cp hitechpos-sdk.jar:gson.jar BasicUsage.java && java -cp .:hitechpos-sdk.jar:gson.jar BasicUsage
```

See the SDK README at `../../sdk/java`.
