import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Device from "./pages/Device";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REG_ROUTE,
  MAIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
} from "./utils/consts";

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
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REG_ROUTE,
    Component: Auth,
  },

  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
];
