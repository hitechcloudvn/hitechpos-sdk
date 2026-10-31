# Contributing to the HiTechPos SDK

Thanks for helping improve the official HiTechPos SDK. This repository hosts SDKs
for five languages that all target the same `/api/v1` surface, so changes should
stay consistent across languages.

## Repository layout

```
sdk/nodejs    TypeScript SDK  (@hitechcloud-vietnam/hitechpos-sdk)
sdk/python    Python SDK      (hitechpos)
sdk/php       PHP SDK         (hitechcloud-vietnam/hitechpos-sdk)
sdk/go        Go SDK          (github.com/hitechcloud-vietnam/hitechpos-sdk/go)
sdk/java      Java SDK        (vn.hitechcloud:hitechpos-sdk)
mcp           Node MCP server
docs          Vietnamese documentation
examples      Per-language usage examples
openapi.json  OpenAPI 3.0 specification
```

## Guidelines

1. **Keep parity.** When you add or change an endpoint, update every SDK and
   `openapi.json`. Each public method maps to exactly one real endpoint.
2. **Conventions.** Clients accept `token`, `base_url`, `timeout`, and
   `max_retries`. Errors are typed. `429`/`5xx` are retried with backoff.
   Lists use `page_number` / `page_size`.
3. **No breaking changes** without a major version bump.

## Running checks locally

```bash
# Python
python -m py_compile sdk/python/hitechpos/**/*.py

# Node (type-check)
cd sdk/nodejs && npm install && npm run build

# PHP
for f in sdk/php/src/**/*.php; do php -l "$f"; done

# Go
cd sdk/go && gofmt -l . && go build ./...

# Java
cd sdk/java && mvn -q compile
```

## Reporting issues

Open an issue at
<https://github.com/hitechcloud-vietnam/hitechpos-sdk/issues> with the language,
SDK version, a minimal reproduction, and the request/response (redact your token).

## License

By contributing you agree your work is licensed under the MIT License.
