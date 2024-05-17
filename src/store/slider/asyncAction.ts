import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from 'store/book/types';

export const fetchSliderBooks = createAsyncThunk<Book[]>(
  'slider/fetchSliderItemsStatus',
  async () => {
    const { data } = await axios.get<Book[]>(
      'https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/slider?count=5',
    );
    return data;
  },
);
