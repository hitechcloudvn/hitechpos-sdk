"""HiTechPos SDK - main client."""

from typing import Optional

from .http_client import HTTPClient
from .resources.shops import ShopsResource
from .resources.products import ProductsResource
from .resources.variations import VariationsResource
from .resources.categories import CategoriesResource
from .resources.inventory import InventoryResource
from .resources.warehouses import WarehousesResource
from .resources.orders import OrdersResource
from .resources.purchases import PurchasesResource
from .resources.exports import ExportsResource
from .resources.transfers import TransfersResource
from .resources.stocktakings import StocktakingsResource
from .resources.suppliers import SuppliersResource
from .resources.customers import CustomersResource
from .resources.promotions import PromotionsResource
from .resources.transactions import TransactionsResource
from .resources.analytics import AnalyticsResource
from .resources.ads import AdsResource
from .resources.marketplace import MarketplaceResource
from .resources.einvoices import EInvoicesResource
from .resources.users import UsersResource
from .resources.geo import GeoResource


class HiTechPos:
    """HiTechPos API client.

    Args:
        token: API token (Bearer).
        base_url: API base URL (default production).
        timeout: request timeout in seconds.
        max_retries: retry attempts for 429 / 5xx.
    """

    PRODUCTION_URL = "https://pos.hitechcloud.vn"
    SANDBOX_URL = "https://pos-sandbox.hitechcloud.vn"

    def __init__(self, token: Optional[str] = None,
                 base_url: str = "https://pos.hitechcloud.vn",
                 timeout: int = 30, max_retries: int = 3):
        self._http = HTTPClient(base_url=base_url, token=token,
                                timeout=timeout, max_retries=max_retries)
        self.shops = ShopsResource(self._http)
        self.products = ProductsResource(self._http)
        self.variations = VariationsResource(self._http)
        self.categories = CategoriesResource(self._http)
        self.inventory = InventoryResource(self._http)
        self.warehouses = WarehousesResource(self._http)
        self.orders = OrdersResource(self._http)
        self.purchases = PurchasesResource(self._http)
        self.exports = ExportsResource(self._http)
        self.transfers = TransfersResource(self._http)
        self.stocktakings = StocktakingsResource(self._http)
        self.suppliers = SuppliersResource(self._http)
        self.customers = CustomersResource(self._http)
        self.promotions = PromotionsResource(self._http)
        self.transactions = TransactionsResource(self._http)
        self.analytics = AnalyticsResource(self._http)
        self.ads = AdsResource(self._http)
        self.marketplace = MarketplaceResource(self._http)
        self.einvoices = EInvoicesResource(self._http)
        self.users = UsersResource(self._http)
        self.geo = GeoResource(self._http)

    def set_token(self, token: str) -> None:
        self._http.set_token(token)

    def __repr__(self) -> str:
        return "HiTechPos(base_url=%r)" % self._http.base_url

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self._http.close()
