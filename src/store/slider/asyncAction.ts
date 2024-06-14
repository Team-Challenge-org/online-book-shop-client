import type { TSliderBook } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "constants/api";

export const fetchSliderBooks = createAsyncThunk<TSliderBook[]>(
  "slider/fetchSliderItemsStatus",
  async () => {
    const { data } = await axios.get<TSliderBook[]>(Endpoints.GET_SLIDER_BOOKS);
    return data;
  }
);
