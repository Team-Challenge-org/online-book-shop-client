import type { TBooksData } from "./types";

import axios from "axios";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<TBooksData>(
  "item/fetchItemsStatus",
  async () => {
    const { data } = await axios.get<TBooksData>(Endpoints.GET_ALL_BOOKS);

    return data;
  }
);
