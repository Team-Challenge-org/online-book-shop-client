import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from './types';

export const fetchBooks = createAsyncThunk<Book[]>('item/fetchItemsStatus', async () => {
  const { data } = await axios.get<Book[]>('https://6427149c46fd35eb7c397933.mockapi.io/books');
  return data;
});
