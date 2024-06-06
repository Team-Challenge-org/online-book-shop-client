import type { TBook } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<TBook[]>(
  "item/fetchItemsStatus",
  async () => {
    const { data } = await axios.get<TBook[]>(
      "https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/all"
    );
    return data;
  }
);
