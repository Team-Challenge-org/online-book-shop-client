import type { TCartItem } from "./types";

import axios from "axios";
import Cookies from "js-cookie";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TCartResponse = {
  id: string;
  isPermanent: boolean;
  lastModified: string;
  items: TCartItem[];
};

export const createUserCart = createAsyncThunk(
  "cart/createUserCart",
  async () => {
    // const { data } = await axios.post(Endpoints.CREATE_CART);
    const { data } = await axios.post("https://online-book-shop-1.onrender.com/api/v1/cart/create");
    return data;
  }
);

// Thunk для получения корзины по UUID
export const getUserCartById = createAsyncThunk<TCartResponse>(
  "cart/getUserCartById",
  async () => {
    const cartId = Cookies.get("userCartId");

    if (!cartId) throw new Error("Cart Id not found");

    const { data } = await axios.get<TCartResponse>(Endpoints.GET_CART_ITEMS, {
      headers: {
        Cookie: `cartId=${cartId}`,
      },
      withCredentials: true,
    });

    return data;
  }
);

export const addBookToUserCart = createAsyncThunk<TCartResponse, number>(
  "cart/addBookToUserCart",
  async (bookId: number) => {
    const cartId = Cookies.get("userCartId");

    if (!cartId) throw new Error("Cart Id not found");

    const { data } = await axios.post<TCartResponse>(
      Endpoints.ADD_BOOK_TO_CART,
      null,
      {
        headers: { Cookie: `cartId=${cartId}` },
        params: {
          bookId,
        },
        withCredentials: true,
      }
    );

    return data;
  }
);
