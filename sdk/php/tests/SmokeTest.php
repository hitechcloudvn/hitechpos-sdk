<?php

// EN: Smoke tests - keep the suite green so CI can gate releases.
// VI: Smoke test - giu bo test xanh de CI kiem soat viec phat hanh.

namespace HiTechCloud\HiTechPos\Tests;

use PHPUnit\Framework\TestCase;

final class SmokeTest extends TestCase
{
    public function testMainClientIsLoadable(): void
    {
        $this->assertTrue(class_exists(\HiTechCloud\HiTechPos\HiTechPos::class));
    }

    public function testExceptionHierarchyIsLoadable(): void
    {
        $this->assertTrue(class_exists(\HiTechCloud\HiTechPos\HiTechPosException::class));
        $this->assertTrue(class_exists(\HiTechCloud\HiTechPos\AuthenticationException::class));
        $this->assertTrue(is_subclass_of(\HiTechCloud\HiTechPos\AuthenticationException::class, \HiTechCloud\HiTechPos\HiTechPosException::class));
    }
}
