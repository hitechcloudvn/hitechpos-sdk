# HiTechPos SDK — Node.js example

> **English** | [Tiếng Việt](README.vi.md)

---

Basic usage sample: create a client, list shops/products, create an order, and verify a
webhook signature.

Put the token in the `HITECHPOS_API_TOKEN` environment variable (and
`HITECHPOS_WEBHOOK_SECRET` if you verify webhooks), then run:

```bash
npm i @hitechcloudvn/hitechpos-sdk && npx ts-node basic_usage.ts
```

See the SDK README at `../../sdk/nodejs`.
