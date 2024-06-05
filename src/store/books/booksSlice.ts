import { type TBook, type IBookSliceState, Status } from "./types";

import { fetchBooks } from "./asyncActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IBookSliceState = {
  books: [],
  status: Status.LOADING,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<TBook[]>) {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = Status.LOADING;
      state.books = [];
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR;
      state.books = [];
    });
  },
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
