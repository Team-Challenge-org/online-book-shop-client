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
      password: user.password,
      //phone: data.phone_number -- Нужно будет добавить, когда добавят на беке
    });

    sessionStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("auth", "true");

    return data;
  }
);

export const checkEmailForResetPassword = createAsyncThunk(
  "user/email_checker",
  async (email: string) => {
    const data = await axios.post(
      `${Endpoints.CHECK_EMAIL}?userEmail=${email}`
    );

    console.log(data);

    return data;
  }
);

type TResetPasswordPayload = {
  token: string | null;
  newPassword: string | null;
};

export const resetPassword = createAsyncThunk(
  "user/reset_password",
  async ({ token, newPassword }: TResetPasswordPayload) => {
    const data = await axios.post(
      `${Endpoints.RESET_PASSWORD}?token=${token}&newPassword=${newPassword}`
    );

    console.log(data);

    return data;
  }
);
