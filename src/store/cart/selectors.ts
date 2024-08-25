import type { TCartItem } from "./types";

import { RootState } from "store/store";


export const selectNotAuthUserCart = (state: RootState) =>
  state.cart.notAuthUserCart;

export const selectItemInNotAuthUserCart =
(book: TCartItem) => (state: RootState) =>
  state.cart.notAuthUserCart.cartItems.find((item) => book.id === item.id);

export const selectItemInAuthUserCart =
(book: TCartItem) => (state: RootState) =>
  state.cart.authUserCart.cartItems.find((item) => book.id === item.id);


export const selectAuthUserCart = (state: RootState) =>
  state.cart.authUserCart;
