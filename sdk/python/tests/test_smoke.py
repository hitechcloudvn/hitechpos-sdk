# EN: Smoke tests - the SDK package imports and exposes its public API.
# VI: Smoke test - gói SDK import được và khai báo API công khai.
from hitechpos import HiTechPos
from hitechpos.exceptions import HiTechPosError


def test_main_client_is_loadable():
    """EN: HiTechPos can be imported. / VI: Import được HiTechPos."""
    assert callable(HiTechPos)


def test_exception_hierarchy_is_loadable():
    """EN: HiTechPosError is the base exception. / VI: HiTechPosError là ngoại lệ gốc."""
    assert issubclass(HiTechPosError, Exception)
