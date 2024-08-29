import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from 'constants/api';
import Axios from 'utils/axiosConfig';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await Axios.get('/api/v1/profile/user');

  return data;
});

export const updateUser = createAsyncThunk('user/update', async (obj: any) => {
  const { data } = await Axios.patch(Endpoints.UPDATE, obj);
  return data;
});
