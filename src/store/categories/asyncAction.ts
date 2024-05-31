import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from './types';

export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetchCategoriesStatus',
  async () => {
    const { data } = await axios.get<Category[]>(
      'https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/category/all',
    );
    return data;
  },
);
