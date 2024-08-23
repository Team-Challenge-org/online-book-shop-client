import type {
  TAPIError,
  TGetCartItemsResponse,
  TDeleteCartItemResponse,
  TUpdateItemQuantityResponse,
} from "./types";

import axios from "axios";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TUpdateParams = {
  bookId: number;
  operation?: "+1" | "-1";
  quantity?: number;
};

axios.defaults.withCredentials = true;

export const getCartItems = createAsyncThunk<
  TGetCartItemsResponse,
  void,
  { rejectValue: TAPIError }
>("cart/getCartItems", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<TGetCartItemsResponse>(
      Endpoints.GET_CART_ITEMS
    );

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const addItemToAuthCart = createAsyncThunk<
  void,
  string,
  { rejectValue: TAPIError }
>("cart/addItemToAuthCart", async (bookId, thunkAPI) => {
  try {
    await axios.post(Endpoints.ADD_BOOK_TO_CART, null, {
      params: { bookId },
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const deleteCartItem = createAsyncThunk<
  TDeleteCartItemResponse,
  string,
  { rejectValue: TAPIError }
>("cart/deleteCartItem", async (bookId, thunkAPI) => {
  try {
    const { data } = await axios.delete<TDeleteCartItemResponse>(
      Endpoints.DELETE_BOOK_FROM_CART,
      {
        params: { bookId },
      }
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const updateCartItemQuantity = createAsyncThunk<
  TUpdateItemQuantityResponse,
  TUpdateParams,
  { rejectValue: TAPIError }
>(
  "cart/updateCartItemQuantity",
  async (updateParams: TUpdateParams, thunkAPI) => {
    try {
      const { data } = await axios.put<TUpdateItemQuantityResponse>(
        Endpoints.UPDATE_BOOK_QUANTITY,
        null,
        {
          params: updateParams,
        }
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as TAPIError);
    }
  }
);
