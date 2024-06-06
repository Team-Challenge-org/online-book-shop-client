import type { TFavoriteItems } from "store/favorite/types";

export const getFavoriteFromLS = () => {
  const data = localStorage.getItem("favorite");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TFavoriteItems[],
  };
};
