import type { TUser } from './types';

import axios from 'axios';
import { Endpoints } from 'constants/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRegisterUserSchema } from 'validations/registerUserSchema';
import { googleLogout } from '@react-oauth/google';
import Cookies from 'js-cookie';

export const loginUser = createAsyncThunk('user/login', async (userCrentials: TUser) => {
  const { data } = await axios.post(Endpoints.LOGIN, userCrentials);

  userCrentials.rememberMe
    ? (Cookies.set('accessToken', data.accessToken, { expires: 10 }),
      Cookies.set('refreshToken', data.refreshToken, { expires: 10 }))
    : (Cookies.set('accessToken', data.accessToken),
      Cookies.set('refreshToken', data.refreshToken));

  return data;
});

export const loginUserGoogle = createAsyncThunk(
  'user/login_google',
  async (access_token: string) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json',
        },
      },
    );

    const { data: result } = await axios.post(Endpoints.OAUTH, {
      name: data.name,
      email: data.email,
      provider: 'google',
      providerId: data.id,
    });

    Cookies.set('accessToken', JSON.stringify(result.accessToken));
    Cookies.set('refreshToken', JSON.stringify(result.refreshToken));

    return result;
  },
);

export const registerUser = createAsyncThunk('user/register', async (user: TRegisterUserSchema) => {
  const { data } = await axios.post(`${Endpoints.REGISTER}`, {
    firstName: user.first_name,
    surname: user.last_name,
    email: user.email,
    phoneNumber: user.phone_number,
    password: user.password,
  });

  sessionStorage.setItem('user', JSON.stringify(data));
  sessionStorage.setItem('auth', 'true');

  await axios.post(`https://online-book-shop-1.onrender.com/api/v1/mail/send?mail=${user.email}`);

  return data;
});

export const checkEmailForResetPassword = createAsyncThunk(
  'user/email_checker',
  async (email: string) => {
    const data = await axios.post(`${Endpoints.CHECK_EMAIL}?userEmail=${email}`);

    return data;
  },
);

type TResetPasswordPayload = {
  token: string | null;
  newPassword: string | null;
};

export const resetPassword = createAsyncThunk(
  'user/reset_password',
  async ({ token, newPassword }: TResetPasswordPayload) => {
    const data = await axios.post(
      `${Endpoints.RESET_PASSWORD}?token=${token}&newPassword=${newPassword}`,
    );

    return data;
  },
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  await axios.post(Endpoints.LOGOUT, '');

  googleLogout();

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');

  return;
});
