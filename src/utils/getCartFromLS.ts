import type { TCartItem } from "store/cart/types";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TCartItem[],
  };
};
