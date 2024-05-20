import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItems, CartSliceState } from './types';
import { getCartFromLS } from 'utils/getCartFromLS';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrRemoveCartItem(state, action: PayloadAction<CartItems>) {
      let checkItemInCart = state.items.find((item: CartItems) => item.id === action.payload.id);
      if (checkItemInCart) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        localStorage.setItem(
          'cart',
          JSON.stringify({
            items: state.items,
          }),
        );
      } else {
        state.items.push({
          ...action.payload,
        });
        localStorage.setItem(
          'cart',
          JSON.stringify({
            items: state.items,
          }),
        );
      }
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addOrRemoveCartItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
