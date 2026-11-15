# HiTechPos MCP Server

> [English](README.md) | **Tiếng Việt**

---

Một [Model Context Protocol](https://modelcontextprotocol.io) server để đưa các thao tác đọc cốt lõi của HiTechPos thành công cụ (tool), giúp trợ lý hỗ trợ MCP truy vấn cửa hàng, sản phẩm, đơn hàng, tồn kho, khách hàng và báo cáo bán hàng của bạn.

## Cài đặt

```bash
cd mcp
npm install
export HITECHPOS_API_TOKEN="your-api-token"
# optional: export HITECHPOS_BASE_URL="https://pos-sandbox.hitechcloud.vn"
npm start
```

## Tools

| Tool | Endpoint |
|------|----------|
| `list_shops` | `GET /api/v1/shops` |
| `get_shop` | `GET /api/v1/shops/{shop_id}` |
| `list_products` | `GET /api/v1/shops/{shop_id}/products` |
| `get_product` | `GET /api/v1/shops/{shop_id}/products/{product_id}` |
| `list_orders` | `GET /api/v1/shops/{shop_id}/orders` |
| `get_order` | `GET /api/v1/shops/{shop_id}/orders/{order_id}` |
| `list_inventory` | `GET /api/v1/shops/{shop_id}/inventory` |
| `list_customers` | `GET /api/v1/shops/{shop_id}/customers` |
| `list_warehouses` | `GET /api/v1/shops/{shop_id}/warehouses` |
| `sales_report` | `GET /api/v1/shops/{shop_id}/analytics/sale` |

## Cấu hình client (ví dụ)

```json
{
  "mcpServers": {
    "hitechpos": {
      "command": "node",
      "args": ["/path/to/hitechpos-sdk/mcp/server.js"],
      "env": { "HITECHPOS_API_TOKEN": "your-api-token" }
    }
  }
}
```

## Giấy phép

MIT
