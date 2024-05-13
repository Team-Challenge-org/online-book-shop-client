import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBook } from './types';

export const fetchBooks = createAsyncThunk<IBook[]>('item/fetchItemsStatus', async () => {
  const { data } = await axios.get<IBook[]>('https://6427149c46fd35eb7c397933.mockapi.io/books');
  return data;
});
