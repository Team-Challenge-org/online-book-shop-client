import type { TCartItem, TCartSliceState } from "./types";

// import { RootState } from "store/store";
import { getCartItems } from "./asyncActions";
import { getCartFromLS } from "utils/getDataFromLS";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TCartSliceState = {
  notAuthUserCart: {
    cartItems: getCartFromLS(),
  },
  authUserCart: {
    cartItems: null,
    totalPrice: 0,
    isLoading: false,
    error: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrRemoveCartItem(state, action: PayloadAction<TCartItem>) {
      const findCartItem = state.notAuthUserCart.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findCartItem) {
        state.notAuthUserCart.cartItems =
          state.notAuthUserCart.cartItems.filter(
            (obj) => obj.id !== action.payload.id
          );
      } else {
        state.notAuthUserCart.cartItems.push({
          ...action.payload,
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );
    },

    clearItems(state) {
      state.notAuthUserCart.cartItems = [];
    },

    increaseItemQuantity(state, { payload }) {
      const currentItem = state.notAuthUserCart.cartItems.find(
        (item) => item.id === payload
      );

      if (currentItem) currentItem.quantity += 1;
      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );
    },

    decreaseItemQantity(state, { payload }) {
      const currentItem = state.notAuthUserCart.cartItems.find(
        (item) => item.id === payload
      );

      if (currentItem) currentItem.quantity -= 1;

      if (currentItem?.quantity === 0) currentItem.quantity = 1;

      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );
    },

    updateItemQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const currentItem = state.notAuthUserCart.cartItems.find(
        (item) => item.id === itemId
      );

      if (currentItem) currentItem.quantity = newQuantity;

      if (currentItem?.quantity === 0) currentItem.quantity = 1;

      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );
    },

    removeItem(state, { payload }) {
      state.notAuthUserCart.cartItems = state.notAuthUserCart.cartItems.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );
    },

    addItemToCart(state, action: PayloadAction<TCartItem>) {
      const { payload } = action;
      const findCartItem = state.notAuthUserCart.cartItems.find(
        (item) => item.id === payload.id
      );

      if (findCartItem) findCartItem.quantity += 1;

      if (!findCartItem) state.notAuthUserCart.cartItems.push(payload);

      localStorage.setItem(
        "cart",
        JSON.stringify(state.notAuthUserCart.cartItems)
      );

      return;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getCartItems.pending, (state) => {
        state.authUserCart.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.authUserCart.isLoading = false;
        state.authUserCart.cartItems = action.payload.items;
        state.authUserCart.totalPrice = action.payload.totalPrice;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.authUserCart.isLoading = false;
        state.authUserCart.error =
          action.payload?.message || "User is not authenticated";
        console.log(action.payload);
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
