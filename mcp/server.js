#!/usr/bin/env node
/**
 * HiTechPos MCP Server
 * Model Context Protocol server exposing the HiTechPos API as tools.
 */
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');

const API_BASE = process.env.HITECHPOS_BASE_URL || 'https://pos.hitechcloud.vn';
const API_TOKEN = process.env.HITECHPOS_API_TOKEN;

async function apiCall(method, path, body = null) {
    const headers = {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'HiTechPos-MCP/1.0.0',
    };
    const opts = { method, headers };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${API_BASE}${path}`, opts);
    return res.json();
}

const TOOLS = [
    {
        "name": "list_shops",
        "description": "List shops the token can access",
        "inputSchema": {
            "type": "object",
            "properties": {},
            "required": []
        }
    },
    {
        "name": "get_shop",
        "description": "Get shop details",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "list_products",
        "description": "List products of a shop",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "get_product",
        "description": "Get a product",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                },
                "product_id": {
                    "type": "string",
                    "description": "product_id"
                }
            },
            "required": [
                "shop_id",
                "product_id"
            ]
        }
    },
    {
        "name": "list_orders",
        "description": "List orders of a shop",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "get_order",
        "description": "Get an order",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                },
                "order_id": {
                    "type": "string",
                    "description": "order_id"
                }
            },
            "required": [
                "shop_id",
                "order_id"
            ]
        }
    },
    {
        "name": "list_inventory",
        "description": "List inventory per warehouse",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "list_customers",
        "description": "List customers of a shop",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "list_warehouses",
        "description": "List warehouses of a shop",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    },
    {
        "name": "sales_report",
        "description": "Get the sales revenue report",
        "inputSchema": {
            "type": "object",
            "properties": {
                "shop_id": {
                    "type": "string",
                    "description": "shop_id"
                }
            },
            "required": [
                "shop_id"
            ]
        }
    }
];

const HANDLERS = {
    list_shops: (args) => apiCall('GET', `/api/v1/shops`),
    get_shop: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}`),
    list_products: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/products`),
    get_product: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/products/${args.product_id}`),
    list_orders: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/orders`),
    get_order: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/orders/${args.order_id}`),
    list_inventory: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/inventory`),
    list_customers: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/customers`),
    list_warehouses: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/warehouses`),
    sales_report: (args) => apiCall('GET', `/api/v1/shops/${args.shop_id}/analytics/sale`),
};

async function main() {
    const server = new Server(
        { name: 'hitechpos', version: '1.0.0' },
        { capabilities: { tools: {} } }
    );

    server.setRequestHandler('tools/list', async () => ({ tools: TOOLS }));

    server.setRequestHandler('tools/call', async (request) => {
        const { name, arguments: args } = request.params;
        const handler = HANDLERS[name];
        if (!handler) throw new Error(`Unknown tool: ${name}`);
        const result = await handler(args || {});
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    });

    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('HiTechPos MCP server running on stdio');
}

main().catch(console.error);
