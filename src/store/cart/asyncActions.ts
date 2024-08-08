import axios from "axios";
import Cookies from "js-cookie";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUserCart = createAsyncThunk(
  "cart/createUserCart",
  async () => {
    const { data } = await axios.post(Endpoints.CREATE_CART);
    return data;
  }
);

// Thunk для получения корзины по UUID
export const getUserCartById = createAsyncThunk(
  "cart/getUserCartById",
  async () => {
    const cartId = Cookies.get("userCartId");

    if (!cartId) throw new Error("Cart Id not found");

    const { data } = await axios.get(Endpoints.GET_CART_BY_ID, {
      params: { cartId },
    });

    return data;
  }
);

export const addBookToUserCart = createAsyncThunk(
  "cart/addBookToUserCart",
  async (bookId: number) => {
    const cartId = Cookies.get("userCartId");

    if (!cartId) throw new Error("Cart Id not found");

    const { data } = await axios.post(Endpoints.ADD_BOOK_TO_CART, null, {
      params: {
        cartId,
        bookId,
      },
    });

    return data;
  }
);
