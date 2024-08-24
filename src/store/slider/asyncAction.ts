import type { TSliderBook } from "./types";

import Axios from "utils/axiosConfig";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSliderBooks = createAsyncThunk<TSliderBook[]>(
  "slider/fetchSliderItemsStatus",
  async () => {
    const { data } = await Axios.get<TSliderBook[]>(Endpoints.GET_SLIDER_BOOKS);
    return data;
  }
);
