import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from 'constants/api';
import Axios from 'utils/axiosConfig';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const { data } = await Axios.get(Endpoints.GET_USER);

  return data;
});

export const updateUser = createAsyncThunk('user/update', async (obj: any) => {
  const { data } = await Axios.patch(Endpoints.UPDATE_USER, obj);
  return data;
});

export const updateUserPassword = createAsyncThunk(
  'user/updatePassword',
  async (password: string) => {
    const { data } = await Axios.put(Endpoints.UPDATE_PASSWORD, { password: password });
    return data;
  },
);
