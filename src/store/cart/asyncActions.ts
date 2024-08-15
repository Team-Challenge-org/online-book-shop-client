import type { TCartItem } from "./types";

import axios from "axios";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TCartResponse = {
  items: TCartItem[];
  totalPrice: number;
};

interface FieldError {
  field: string;
  message: string;
}

interface APIError {
  message: string;
  code?: number;
  errors?: FieldError[];
}

axios.defaults.withCredentials = true;

export const getCartItems = createAsyncThunk<
  TCartResponse,
  void,
  { rejectValue: APIError }
>("cart/getCartItems", async (_, thunkAPI) => {
  try {
    // const user = sessionStorage.getItem("user") || localStorage.getItem("user");
    // const token = user ? JSON.parse(user).token : null;

    const { data } = await axios.get<TCartResponse>(Endpoints.GET_CART_ITEMS);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.errors as APIError);
      }
    }

    return thunkAPI.rejectWithValue({
      message: "User is not authenticated",
    });
  }
});
