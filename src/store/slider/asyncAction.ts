import type { TSliderBook } from "./types";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSliderBooks = createAsyncThunk<TSliderBook[]>(
  "slider/fetchSliderItemsStatus",
  async () => {
    const { data } = await axios.get<TSliderBook[]>(
      "https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/slider"
      );
    return data;
    
  }
);
