import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import booksReducer from './books/booksSlice';
import sliderReducer from './slider/sliderSlice';
import favoriteReducer from './favorite/favoriteSlice';
import categoriesReducer from './categories/categoriesSlice';
import recentlyViewedBooksReducer from './recentlyViewedBooks/recentlyViewedBooksSlice';
import userReducer from './user/userSlice';
import deliveryReducer from './delivery/deliverySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
    slider: sliderReducer,
    favorite: favoriteReducer,
    categories: categoriesReducer,
    recentlyViewedBooks: recentlyViewedBooksReducer,
    user: userReducer,
    delivery: deliveryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
