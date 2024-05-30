import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import item from './book/slice';
import cart from './cart/slice';
import slider from './slider/slice';
import favorite from './favorite/slice';
import categories from './categories/slice';

export const store = configureStore({
  reducer: {
    item,
    cart,
    slider,
    favorite,
    categories,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
