import type { TUserState } from './types';

import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './asyncActions';
import { getAuthFromLS, getUserFromLS } from 'utils/getDataFromLS';

const initialState: TUserState = {
  loading: false,
  user: getUserFromLS(),
  error: null,
  isAuth: getAuthFromLS(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
        state.isAuth = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'User not found') {
          state.error = 'User not found';
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
        state.isAuth = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
      })
      
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = null;
        state.isAuth = false
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === 'CharSequence cannot be null or empty.') {
          state.error = 'User not found';
        } else {
          state.error = action.error.message!;
        }
      })
  },
});

export default userSlice.reducer;
