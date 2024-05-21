import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SliderBook } from './types';

export const fetchSliderBooks = createAsyncThunk<SliderBook[]>(
  'slider/fetchSliderItemsStatus',
  async () => {
    const { data } = await axios.get<SliderBook[]>(
      'https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/slider?count=5',
    );
    return data;
  },
);
