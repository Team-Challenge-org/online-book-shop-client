import type { CartItem, CartSliceState } from './types';

import { getCartFromLS } from 'utils/getCartFromLS';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrRemoveCartItem(state, action: PayloadAction<CartItem>) {
      const findCartItem = state.items.find((item) => item.id === action.payload.id);

      if (findCartItem) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.items.push({
          ...action.payload,
        });
      }
    },
    clearItems(state) {
      state.items = [];
    },
    increaseItemQuantity(state, { payload }) {
      const currentItem = state.items.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity += 1;
    },
    decreaseItemQantity(state, { payload }) {
      const currentItem = state.items.find((item) => item.id === payload);

      if (currentItem) currentItem.quantity -= 1;

      if (currentItem?.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== payload);
      }
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const {
  clearItems,
  removeItem,
  addOrRemoveCartItem,
  increaseItemQuantity,
  decreaseItemQantity,
} = cartSlice.actions;

export default cartSlice.reducer;
