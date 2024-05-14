import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import item from './book/slice';
import cart from './cart/slice';

export const store = configureStore({
  reducer: {
    item,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
