import type { TBook } from 'store/books/types';
import type { TCartItem } from 'store/cart/types';
import type { TCategory } from 'store/categories/types';
import type { TFavoriteItems } from 'store/favorite/types';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TCartItem[],
  };
};

export const getCategoryFromLS = () => {
  const data = localStorage.getItem('category');
  const category: TCategory = data ? JSON.parse(data) : '';

  return category;
};

export const getFavoriteFromLS = () => {
  const data = localStorage.getItem('favorite');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TFavoriteItems[],
  };
};

export function getRecentlyViewedBooksFromLS() {
  const data = localStorage.getItem('recentlyViewedBooks');
  const books = data ? JSON.parse(data) : [];

  return {
    books: books as TBook[],
  };
}

export function getSimilarBooksFromLS() {
  const data = localStorage.getItem('similarBooks');
  const books: TBook[] = data ? JSON.parse(data) : [];

  return books;
}

export function getUserFromLS() {
  const data = localStorage.getItem('user');
  const user: string = data ? JSON.parse(data) : null;

  return user;
}

export function getAuthFromLS() {
  const data = localStorage.getItem('auth')
  const auth: boolean = data ? JSON.parse(data) : false;

  return auth
}