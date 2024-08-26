import type { TBooksData } from "./types";

import Axios from "utils/axiosConfig";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk<TBooksData>(
  "item/fetchItemsStatus",
  async () => {
    const { data } = await Axios.get<TBooksData>(Endpoints.GET_ALL_BOOKS);

    return data;
  }
);
