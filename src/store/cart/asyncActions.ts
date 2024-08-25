import type {
  TAPIError,
  TUpdateParams,
  TGetCartItemsResponse,
  TDeleteCartItemResponse,
  TUpdateItemQuantityResponse,
} from "./types";

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
  void,
  number,
  { rejectValue: TAPIError }
>("cart/addItemToAuthCart", async (bookId, thunkAPI) => {
  try {
    await Axios.post(Endpoints.ADD_BOOK_TO_CART, null, {
      params: { bookId },
    });

    thunkAPI.dispatch(getCartItems());
  } catch (error) {
    return thunkAPI.rejectWithValue(error as TAPIError);
  }
});

export const deleteCartItem = createAsyncThunk<
  TDeleteCartItemResponse,
  number,
  { rejectValue: TAPIError }
>("cart/deleteCartItem", async (bookId, thunkAPI) => {
  try {
    const { data } = await Axios.delete<TDeleteCartItemResponse>(
      Endpoints.DELETE_BOOK_FROM_CART,
      {
        params: { bookId },
      }
    );

    thunkAPI.dispatch(getCartItems());

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
      const { data } = await Axios.put<TUpdateItemQuantityResponse>(
        Endpoints.UPDATE_BOOK_QUANTITY,
        null,
        {
          params: updateParams,
        }
      );

      thunkAPI.dispatch(getCartItems());

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as TAPIError);
    }
  }
);
