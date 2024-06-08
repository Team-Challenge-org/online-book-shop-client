import { TBook } from "store/books/types";

export function getSimilarBooksFromLS() {
  const data = localStorage.getItem("similarBooks");
  const books: TBook[] = data ? JSON.parse(data) : [];

  return books;
}
