import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from './types';
import { Endpoints } from 'constants/api';

export const loginUser = createAsyncThunk('auth/login', async (userCrentials: TUser) => {
  const { data } = await axios.post(Endpoints.LOGIN,
    userCrentials,
  );
  localStorage.setItem('user', JSON.stringify(data));
  localStorage.setItem('auth', 'true')

  return data;
});
