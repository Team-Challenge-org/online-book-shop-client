import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import booksReducer from "./books/booksSlice";
import sliderReducer from "./slider/sliderSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import categoriesReducer from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
    slider: sliderReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
