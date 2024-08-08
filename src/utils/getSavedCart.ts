import Cookies from "js-cookie";
import { useAuth } from "contexts/AuthContext";
import { getCartFromLS } from "./getDataFromLS";

export function getSavedCart() {
  const { isAuth } = useAuth();

  return isAuth ? JSON.parse(Cookies.get("cart") || "[]") : getCartFromLS();
}
