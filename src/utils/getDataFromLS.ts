import type { TBook } from "store/books/types";
import type { TCategory } from "store/categories/types";
import type { TFavoriteItems } from "store/favorite/types";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const books = data ? JSON.parse(data) : [];

  return books;
};

export const getCategoryFromLS = () => {
  const data = localStorage.getItem("category");
  const category: TCategory = data ? JSON.parse(data) : "";

  return category;
};

export const getFavoriteFromLS = () => {
  const data = localStorage.getItem("favorite");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as TFavoriteItems[],
  };
};

export function getRecentlyViewedBooksFromLS() {
  const data = localStorage.getItem("recentlyViewedBooks");
  const books = data ? JSON.parse(data) : [];

  return {
    books: books as TBook[],
  };
}

export function getSimilarBooksFromLS() {
  const data = localStorage.getItem("similarBooks");
  const books: TBook[] = data ? JSON.parse(data) : [];

  return books;
}

export function getUserFromLS() {
  let data = localStorage.getItem("user");
  let data2 = sessionStorage.getItem("user");

  const user: string = data
    ? JSON.parse(data)
    : data2
    ? JSON.parse(data2)
    : null;

  return user;
}

export function getAuthFromLS() {
  let data = localStorage.getItem("auth");
  let data2 = sessionStorage.getItem("auth");

  const auth: boolean = data
    ? JSON.parse(data)
    : data2
    ? JSON.parse(data2)
    : false;

  return auth;
}
