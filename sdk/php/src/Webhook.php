<?php

namespace HiTechCloud\HiTechPos;

class Webhook
{
    public const SIGNATURE_HEADER = 'X-HitechPos-Signature';
    public const EVENT_HEADER = 'X-HitechPos-Event';
    public const DELIVERY_HEADER = 'X-HitechPos-Delivery';

    public static function computeSignature(string $secret, string $payload): string
    {
        return hash_hmac('sha256', $payload, $secret);
    }

    public static function verifySignature(string $secret, string $payload, string $signature): bool
    {
        $expected = self::computeSignature($secret, $payload);
        return hash_equals($expected, $signature);
    }

    public static function parseEvent(string $payload): array
    {
        return json_decode($payload, true) ?? [];
    }
}
