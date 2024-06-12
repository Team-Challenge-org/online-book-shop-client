import { getCartFromLS } from "utils/getDataFromLS";
import type { TCartItem, TCartSliceState } from "./types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TCartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrRemoveCartItem(state, action: PayloadAction<TCartItem>) {
      const findCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findCartItem) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.items.push({
          ...action.payload,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearItems(state) {
      state.items = [];
    },
    increaseItemQuantity(state, { payload }) {
      const currentItem = state.items.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity += 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decreaseItemQantity(state, { payload }) {
      const currentItem = state.items.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity -= 1;

      if (currentItem?.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateItemQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const currentItem = state.items.find((item) => item.id === itemId);

      if (currentItem) {
        currentItem.quantity = newQuantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addItemToCart(state, { payload }) {
      const findCartItem = state.items.find((item) => item.id === payload.id);

      if (!findCartItem) {
        state.items.push(payload);
      }

      if (findCartItem?.quantity === 0) {
        findCartItem.quantity = 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));

      return;
    },
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
