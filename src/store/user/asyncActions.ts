import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from 'utils/axiosConfig';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await axiosConfig.get('/api/v1/profile/user');

  return data;
});
