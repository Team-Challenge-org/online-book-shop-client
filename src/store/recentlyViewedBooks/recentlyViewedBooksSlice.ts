import type { TRecentlyViewedBooksSlice } from "./types";

import { createSlice } from "@reduxjs/toolkit";
import { getRecentlyViewedBooksFromLS } from "utils/getRecentlyViewedBooksFromLS";

const initialState: TRecentlyViewedBooksSlice = getRecentlyViewedBooksFromLS();

const recentlyViewedBooksSlice = createSlice({
  name: "recentlyViewedBooks",
  initialState,
  reducers: {
    addRecentlyViewedBook(state, { payload }) {
      const currentBook = payload;
      const bookExists = state.books.some((book) => book.id === currentBook.id);

      if (!bookExists) {
        state.books.unshift(currentBook);
        if (state.books.length > 6) {
          state.books.pop();
        }
      }

      localStorage.setItem("recentlyViewedBooks", JSON.stringify(state.books));
    },
  },
});

export default recentlyViewedBooksSlice.reducer;

export const { addRecentlyViewedBook } = recentlyViewedBooksSlice.actions;
