import Admin from "../pages/Admin/Admin";
import Auth from "../pages/Auth/Auth";
import Basket from "../pages/Basket/Basket";
import Product from "../pages/Product/Product";
import Shop from "../pages/Shop/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PRODUCT_ROUTE + "/:productId",
    Component: Product,
  },
];
