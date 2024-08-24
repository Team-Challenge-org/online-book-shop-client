import type { TCategory } from "./types";

import Axios from "utils/axiosConfig";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk<TCategory[]>(
  "categories/fetchCategoriesStatus",
  async () => {
    const { data } = await Axios.get<TCategory[]>(Endpoints.GET_ALL_CATEGORIES);
    return data;
  }
);
