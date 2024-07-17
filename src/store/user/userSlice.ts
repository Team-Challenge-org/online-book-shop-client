import type { TUserState } from "./types";

import {
  loginUser,
  registerUser,
  checkEmailForResetPassword,
} from "./asyncActions";
import { createSlice } from "@reduxjs/toolkit";
import { getAuthFromLS, getUserFromLS } from "utils/getDataFromLS";

const initialState: TUserState = {
  loading: false,
  user: getUserFromLS(),
  error: null,
  isAuth: getAuthFromLS(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("auth");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "User not found") {
          state.error = "User not found";
        } else {
          state.error = action.error.message!;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuth = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
      })
      .addCase(checkEmailForResetPassword.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(checkEmailForResetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(checkEmailForResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
