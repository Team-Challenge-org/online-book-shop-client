import type { TUser } from './types';

import axios from 'axios';
import { Endpoints } from 'constants/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRegisterUserSchema } from 'validations/registerUserSchema';
import { googleLogout } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { RootState } from 'store/store';
import { getFavorites } from 'store/favorite/asyncActions';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userCrentials: TUser, { getState, dispatch }) => {
    const { data } = await axios.post(Endpoints.LOGIN, userCrentials);

    userCrentials.rememberMe
      ? (Cookies.set('accessToken', data.accessToken, { expires: 10 }),
        Cookies.set('refreshToken', data.refreshToken, { expires: 10 }))
      : (Cookies.set('accessToken', data.accessToken),
        Cookies.set('refreshToken', data.refreshToken));

    await dispatch(getFavorites());

    const state = getState() as RootState;

    localStorage.clear();
    const favoriteItems = state.favorite.items;
    localStorage.setItem('favorite', JSON.stringify(favoriteItems));

    return data;
  },
);

export const loginUserGoogle = createAsyncThunk(
  'auth/login_google',
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

export const registerUser = createAsyncThunk('auth/register', async (user: TRegisterUserSchema) => {
  const { data } = await axios.post(`${Endpoints.REGISTER}`, {
    firstName: user.first_name,
    surname: user.last_name,
    email: user.email,
    phoneNumber: user.phone_number,
    password: user.password,
  });

  Cookies.set('accessToken', data.accessToken), Cookies.set('refreshToken', data.refreshToken);

  await axios.post(`${Endpoints.SEND_EMAIL}${user.email}`);

  return data;
});

export const checkEmailForResetPassword = createAsyncThunk(
  'auth/email_checker',
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
  'auth/reset_password',
  async ({ token, newPassword }: TResetPasswordPayload) => {
    const data = await axios.post(
      `${Endpoints.RESET_PASSWORD}?token=${token}&newPassword=${newPassword}`,
    );

    return data;
  },
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await axios.post(Endpoints.LOGOUT, '');

  googleLogout();

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');

  return;
});
