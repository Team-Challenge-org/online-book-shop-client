import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import booksReducer from "./books/booksSlice";
import sliderReducer from "./slider/sliderSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import deliveryReducer from "./delivery/deliverySlice";
import categoriesReducer from "./categories/categoriesSlice";
import recentlyViewedBooksReducer from "./recentlyViewedBooks/recentlyViewedBooksSlice";
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    books: booksReducer,
    slider: sliderReducer,
    delivery: deliveryReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
    recentlyViewedBooks: recentlyViewedBooksReducer,

    auth: authReducer,
    delivery: deliveryReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
