import type { TCategory } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "constants/api";

export const fetchCategories = createAsyncThunk<TCategory[]>(
  "categories/fetchCategoriesStatus",
  async () => {
    const { data } = await axios.get<TCategory[]>(Endpoints.GET_ALL_CATEGORIES);
    return data;
  }
);
