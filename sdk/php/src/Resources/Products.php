<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * San pham, bien the, danh muc phu, combo, nhan.
 */
class Products extends BaseResource
{
    /** GET /api/v1/shops/{shop_id}/products - Danh sach san pham */
    public function list(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/products', $params);
    }

    /** GET /api/v1/shops/{shop_id}/products/{product_id} - Chi tiet san pham */
    public function get(string $shopId, string $productId): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/products/' . $productId);
    }

    /** GET /api/v1/shops/{shop_id}/products/{product_sku} - Chi tiet san pham theo SKU */
    public function getBySku(string $shopId, string $productSku): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/products/' . $productSku);
    }

    /** POST /api/v1/shops/{shop_id}/products - Tao san pham */
    public function create(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/products', $data);
    }

    /** PUT /api/v1/shops/{shop_id}/products/{product_id} - Cap nhat san pham */
    public function update(string $shopId, string $productId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/products/' . $productId, $data);
    }

    /** PUT /api/v1/shops/{shop_id}/products/update_hide - An/hien san pham hang loat */
    public function updateHide(string $shopId, array $data): ?array
    {
        return $this->http->put('/api/v1/shops/' . $shopId . '/products/update_hide', $data);
    }

    /** GET /api/v1/shops/{shop_id}/products/variations - Danh sach bien the */
    public function listVariations(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/products/variations', $params);
    }

    /** POST /api/v1/shops/{shop_id}/products/get_logistics_shipping_document - Lay chung tu van chuyen */
    public function getLogisticsShippingDocument(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/products/get_logistics_shipping_document', $data);
    }

    /** GET /api/v1/shops/{shop_id}/materials_products - Danh sach nguyen vat lieu */
    public function listMaterials(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/materials_products', $params);
    }

    /** GET /api/v1/shops/{shop_id}/product_measurements/get_measure - Lay don vi do luong */
    public function getMeasure(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/product_measurements/get_measure', $params);
    }

    /** GET /api/v1/shops/{shop_id}/brand - Danh sach thuong hieu */
    public function listBrands(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/brand', $params);
    }

    /** GET /api/v1/shops/{shop_id}/tags_products - Danh sach nhan san pham */
    public function listTags(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/tags_products', $params);
    }

    /** POST /api/v1/shops/{shop_id}/tags_products - Tao nhan san pham */
    public function createTag(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/tags_products', $data);
    }

    /** GET /api/v1/shops/{shop_id}/combo_products - Danh sach san pham combo */
    public function listCombos(string $shopId, ?array $params = null): ?array
    {
        return $this->http->get('/api/v1/shops/' . $shopId . '/combo_products', $params);
    }

    /** POST /api/v1/shops/{shop_id}/combo_products - Tao san pham combo */
    public function createCombo(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/combo_products', $data);
    }

}