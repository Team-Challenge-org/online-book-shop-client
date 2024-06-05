import type { TBook } from "store/books/types";

export function getRecentlyViewedBooksFromLS() {
  const data = localStorage.getItem("recentlyViewedBooks");
  const books = data ? JSON.parse(data) : [];

  return {
    books: books as TBook[],
  };
}
