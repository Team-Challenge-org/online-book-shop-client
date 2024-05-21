import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';
import { getCartFromLS } from 'utils/getCartFromLS';

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
  },
});

export const { addOrRemoveCartItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
