import type { TBook, TBooksData } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<TBooksData>(
  "item/fetchItemsStatus",
  async () => {
    const { data } = await axios.get<TBooksData>(
      "https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/all"
    );

    return data;
  }
);
