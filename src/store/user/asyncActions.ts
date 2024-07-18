import type { TUser } from "./types";

import axios from "axios";
import { Endpoints } from "constants/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TRegisterUserSchema } from "validations/registerUserSchema";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCrentials: TUser) => {
    const { data } = await axios.post(Endpoints.LOGIN, userCrentials);

    if (userCrentials.isRememberMe) {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("auth", "true");
    } else {
      sessionStorage.setItem("user", JSON.stringify(data));
      sessionStorage.setItem("auth", "true");
    }

    return data;
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (user: TRegisterUserSchema) => {
    const { data } = await axios.post(`${Endpoints.REGISTER}`, {
      firstName: user.first_name,
      surname: user.last_name,
      email: user.email,
      phoneNumber: user.phone_number,
      password: user.password,
    });

    sessionStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("auth", "true");

    await axios.post(`https://online-book-shop-1.onrender.com/api/v1/mail/send?mail=${user.email}`)

    return data;
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async ({token}: any) => {
    
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    await axios.post(Endpoints.LOGOUT, '' , config)

    localStorage.removeItem('user');
    localStorage.removeItem('auth');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('auth');

    return
  }
)