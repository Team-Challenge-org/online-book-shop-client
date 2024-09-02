import type { TAPIError, TUpdateParams, TGetCartItemsResponse } from "./types";

import Axios from "utils/axiosConfig";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCartItems = createAsyncThunk<
  TGetCartItemsResponse,
  void,
  { rejectValue: TAPIError }
>("cart/getCartItems", async (_, thunkAPI) => {
  try {
    const { data } = await Axios.get<TGetCartItemsResponse>(
      Endpoints.GET_CART_ITEMS
    );

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const addItemToAuthCart = createAsyncThunk<
  TGetCartItemsResponse,
  number,
  { rejectValue: TAPIError }
>("cart/addItemToAuthCart", async (bookId, thunkAPI) => {
  try {
    const { data } = await Axios.post<TGetCartItemsResponse>(
      Endpoints.ADD_BOOK_TO_CART,
      null,
      {
        params: { bookId },
      }
    );

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const deleteCartItem = createAsyncThunk<
  TGetCartItemsResponse,
  number,
  { rejectValue: TAPIError }
>("cart/deleteCartItem", async (bookId, thunkAPI) => {
  try {
    const { data } = await Axios.delete<TGetCartItemsResponse>(
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
  TGetCartItemsResponse,
  TUpdateParams,
  { rejectValue: TAPIError }
>(
  "cart/updateCartItemQuantity",
  async (updateParams: TUpdateParams, thunkAPI) => {
    try {
      const { data } = await Axios.put<TGetCartItemsResponse>(
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
