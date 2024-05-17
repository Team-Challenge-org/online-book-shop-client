import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import item from './book/slice';
import cart from './cart/slice';
import slider from './slider/slice';

export const store = configureStore({
  reducer: {
    item,
    cart,
    slider,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
