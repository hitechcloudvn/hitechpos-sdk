<?php

namespace HiTechCloud\HiTechPos\Resources;

/**
 * Bien the san pham va cap nhat ton kho.
 */
class Variations extends BaseResource
{
    /** POST /api/v1/shops/{shop_id}/variations/{variation_id}/update_quantity - Cap nhat so luong ton cua 1 bien the */
    public function updateQuantity(string $shopId, string $variationId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/variations/' . $variationId . '/update_quantity', $data);
    }

    /** POST /api/v1/shops/{shop_id}/variations/update_quantity - Cap nhat so luong ton hang loat */
    public function updateQuantityBulk(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/variations/update_quantity', $data);
    }

    /** POST /api/v1/shops/{shop_id}/variations/update_composite_product - Cap nhat san pham dinh muc */
    public function updateCompositeProduct(string $shopId, array $data): ?array
    {
        return $this->http->post('/api/v1/shops/' . $shopId . '/variations/update_composite_product', $data);
    }

}