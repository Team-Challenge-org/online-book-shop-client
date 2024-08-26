import type { TAuthState } from './types';

import {
  loginUser,
  registerUser,
  checkEmailForResetPassword,
  resetPassword,
  logoutUser,
  loginUserGoogle,
} from './asyncActions';

import { createSlice } from '@reduxjs/toolkit';
import { getAuthFromCookies } from 'utils/getDataFromCookies';

const initialState: TAuthState = {
  loading: false,
  error: null,
  isAuth: getAuthFromCookies(),
  isEmailChecked: false,
  isPasswordReset: false,
  showMessage: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetEmailCheckState(state) {
      state.isEmailChecked = false;
      state.error = null;
    },

    hideMessage(state) {
      state.showMessage = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);

        if (action.error.message === 'User not found') {
          state.error = 'User not found';
        } else {
          state.error = action.error.message!;
        }
      })
      .addCase(loginUserGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuth = true;
      })
      .addCase(loginUserGoogle.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        if (action.error.message === 'User not found') {
          state.error = 'User not found';
        } else {
          state.error = action.error.message!;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuth = true;
        state.showMessage = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
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
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        if (action.error.message === 'CharSequence cannot be null or empty.') {
          state.error = 'User not found';
        } else {
          state.error = action.error.message!;
        }
      });
  },
});

export const { resetEmailCheckState, hideMessage } = authSlice.actions;

export default authSlice.reducer;
