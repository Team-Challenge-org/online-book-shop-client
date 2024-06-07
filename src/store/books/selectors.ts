import { RootState } from "./../store";

export const selectBookData = (state: RootState) => state.books;
export const selectSimilarBooks = (state: RootState) =>
  state.books.similarBooks;
