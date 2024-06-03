import type { Book } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<Book[]>(
  "item/fetchItemsStatus",
  async () => {
    const { data } = await axios.get<Book[]>(
      "https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/all"
    );
    return data;
  }
);
