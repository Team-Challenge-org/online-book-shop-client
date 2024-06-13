import { type TBook, type IBookSliceState, Status } from "./types";

import { fetchBooks } from "./asyncActions";
import { getSimilarBooksFromLS } from "utils/getDataFromLS";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IBookSliceState = {
  books: [],
  similarBooks: getSimilarBooksFromLS(),
  status: Status.LOADING,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<TBook[]>) {
      state.books = action.payload;
    },
    setSimilarBooks(state, { payload }) {
      const receivedBook = payload;
      const similarBooks = state.books.filter(
        (book) =>
          book.category === receivedBook.category && book.id !== receivedBook.id
      );
      // Shuffle the filtered books to randomize selection
      const shuffledSimilarBooks = [...similarBooks].sort(
        () => Math.random() - 0.5
      );
      const sixSimilarBooks = shuffledSimilarBooks.slice(0, 6);

      state.similarBooks = sixSimilarBooks;
      localStorage.setItem("similarBooks", JSON.stringify(state.similarBooks));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.books = [];
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const booksData = action.payload;
      state.books = booksData.content;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.books = [];
    });
  },
});

export const { setBooks, setSimilarBooks } = bookSlice.actions;

export default bookSlice.reducer;
