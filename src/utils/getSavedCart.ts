import Cookies from "js-cookie";
import { getCartFromLS } from "./getDataFromLS";

export function getSavedCart(isAuthenticated: boolean | null) {
  return isAuthenticated
    ? JSON.parse(Cookies.get("cart") || "[]")
    : getCartFromLS();
}
