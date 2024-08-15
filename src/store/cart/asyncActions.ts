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

export const getCartItems = createAsyncThunk<
  TCartResponse,
  void,
  { rejectValue: APIError }
>("cart/getCartItems", async (_, thunkAPI) => {
  try {
    const token =
      sessionStorage.getItem("user") || localStorage.getItem("user");

    const { data } = await axios.get<TCartResponse>(Endpoints.GET_CART_ITEMS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.errors as APIError);
      }
    }

    return thunkAPI.rejectWithValue({
      message: "An unexpected error occurred",
    });
  }
});

// export const getUserCartById = createAsyncThunk<TCartResponse>(
//   "cart/getUserCartById",
//   async () => {
//     const cartId = Cookies.get("userCartId");

//     if (!cartId) throw new Error("Cart Id not found");

//     const { data } = await axios.get<TCartResponse>(Endpoints.GET_CART_BY_ID, {
//       headers: {
//         Cookie: `cartId=${cartId}`,
//       },
//       withCredentials: true,
//     });

//     return data;
//   }
// );
