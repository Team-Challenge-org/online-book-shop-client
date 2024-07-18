import type { TUserState } from "./types";

import {
  loginUser,
  registerUser,
  checkEmailForResetPassword,
  resetPassword,
} from "./asyncActions";
import { createSlice } from "@reduxjs/toolkit";
import { getAuthFromLS, getUserFromLS } from "utils/getDataFromLS";

const initialState: TUserState = {
  loading: false,
  user: getUserFromLS(),
  error: null,
  isAuth: getAuthFromLS(),
  isEmailChecked: false,
  isPasswordReset: false,
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
    resetEmailCheckState(state) {
      state.isEmailChecked = false;
      state.error = null;
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
        state.error = null;
        state.isEmailChecked = false;
      })
      .addCase(checkEmailForResetPassword.fulfilled, (state) => {
        state.loading = false;
        state.isEmailChecked = true;
      })
      .addCase(checkEmailForResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
        state.isEmailChecked = false;
      })

      .addCase(resetPassword.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.isPasswordReset = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
        state.isPasswordReset = false;
      });
  },
});

export const { logout, resetEmailCheckState } = userSlice.actions;

export default userSlice.reducer;
