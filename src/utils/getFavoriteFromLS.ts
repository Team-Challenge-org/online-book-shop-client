import { FavoriteItems } from 'store/favorite/types';

export const getCartFromLS = () => {
  const data = localStorage.getItem('favorite');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as FavoriteItems[],
  };
};
