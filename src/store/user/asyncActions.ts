import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'utils/axiosConfig';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await Axios.get('/api/v1/profile/user');

  return data;
});

export const updateUser = createAsyncThunk('user/update', async (obj: any) => {
  const { data } = await Axios.patch(
    'https://online-book-shop-1.onrender.com/api/v1/profile/update',
    {
      obj,
    },
  );
  console.log(data);
  return data;
});
