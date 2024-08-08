import type { TCartItem, TCartSliceState } from "./types";

import {
  createUserCart,
  getUserCartById,
  addBookToUserCart,
} from "./asyncActions";
import Cookies from "js-cookie";
import { getSavedCart } from "utils/getSavedCart";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TCartSliceState = {
  cartId: Cookies.get("userCartId") || null,
  books: getSavedCart(),
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrRemoveCartItem(state, action: PayloadAction<TCartItem>) {
      const findCartItem = state.books.find(
        (item) => item.id === action.payload.id
      );

      if (findCartItem) {
        state.books = state.books.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.books.push({
          ...action.payload,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.books));
    },

    clearItems(state) {
      state.books = [];
    },

    increaseItemQuantity(state, { payload }) {
      const currentItem = state.books.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.books));
    },

    decreaseItemQantity(state, { payload }) {
      const currentItem = state.books.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity -= 1;

      if (currentItem?.quantity === 0) currentItem.quantity = 1;

      localStorage.setItem("cart", JSON.stringify(state.books));
    },

    updateItemQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const currentItem = state.books.find((item) => item.id === itemId);

      if (currentItem) currentItem.quantity = newQuantity;

      if (currentItem?.quantity === 0) currentItem.quantity = 1;

      localStorage.setItem("cart", JSON.stringify(state.books));
    },

    removeItem(state, { payload }) {
      state.books = state.books.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.books));
    },

    addItemToCart(state, { payload }) {
      const findCartItem = state.books.find((item) => item.id === payload.id);

      if (findCartItem) findCartItem.quantity += 1;

      if (!findCartItem) state.books.push(payload);

      localStorage.setItem("cart", JSON.stringify(state.books));

      return;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartId = action.payload.cartId;
        Cookies.set("userCartId", action.payload.cartId);
      })
      .addCase(createUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart";
      })

      .addCase(getUserCartById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCartById.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        Cookies.set("cart", JSON.stringify(state.books));
      })
      .addCase(getUserCartById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to get books";
      })

      .addCase(addBookToUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookToUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload.bookId);
        Cookies.set("cart", JSON.stringify(state.books));
      })
      .addCase(addBookToUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add book to cart";
      });
  },
});

export const {
  clearItems,
  removeItem,
  addItemToCart,
  updateItemQuantity,
  addOrRemoveCartItem,
  increaseItemQuantity,
  decreaseItemQantity,
} = cartSlice.actions;

export default cartSlice.reducer;
