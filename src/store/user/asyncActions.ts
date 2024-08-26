import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'utils/axiosConfig';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await Axios.get('/api/v1/profile/user');

  return data;
});
