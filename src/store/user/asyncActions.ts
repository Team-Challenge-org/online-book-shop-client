import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from './types';
import { Endpoints } from 'constants/api';
import { TRegisterUserSchema } from 'validations/registerUserSchema';

export const loginUser = createAsyncThunk('user/login', async (userCrentials: TUser) => {
  const { data } = await axios.post(Endpoints.LOGIN, userCrentials);

  if (userCrentials.isRememberMe) {
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('auth', 'true');
  } else {
    sessionStorage.setItem('user', JSON.stringify(data));
    sessionStorage.setItem('auth', 'true');
  }

  return data;
});

export const registerUser = createAsyncThunk('user/register', async (user: TRegisterUserSchema) => {
  const { data } = await axios.post(`${Endpoints.REGISTER}`, {
    firstName: user.first_name,
    surname: user.last_name,
    email: user.email,
    password: user.password,
    //phone: data.phone_number -- Нужно будет добавить, когда добавят на беке
  });

  sessionStorage.setItem('user', JSON.stringify(data));
  sessionStorage.setItem('auth', 'true');

  return data
})