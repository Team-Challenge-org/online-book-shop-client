import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import item from './book/slice';

export const store = configureStore({
  reducer: {
    item,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
