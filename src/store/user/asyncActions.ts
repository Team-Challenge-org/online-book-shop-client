import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from './types';

export const loginUser = createAsyncThunk('auth/login', async (userCrentials: TUser) => {
  const { data } = await axios.post(
    'https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/auth/login',
    userCrentials,
  );
  localStorage.setItem('user', JSON.stringify(data));
  localStorage.setItem('auth', 'true')

  return data;
});
