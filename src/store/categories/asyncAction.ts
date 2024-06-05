import type { TCategory } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk<TCategory[]>(
  "categories/fetchCategoriesStatus",
  async () => {
    const { data } = await axios.get<TCategory[]>(
      "https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/category/all"
    );
    return data;
  }
);
