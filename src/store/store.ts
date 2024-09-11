import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import booksReducer from "./books/booksSlice";
import sliderReducer from "./slider/sliderSlice";
import catalogReducer from "./catalog/catalogSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import deliveryReducer from "./delivery/deliverySlice";
import categoriesReducer from "./categories/categoriesSlice";
import recentlyViewedBooksReducer from "./recentlyViewedBooks/recentlyViewedBooksSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,
    books: booksReducer,
    slider: sliderReducer,
    catalog: catalogReducer,
    delivery: deliveryReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
    recentlyViewedBooks: recentlyViewedBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
