import { createSlice } from '@reduxjs/toolkit';
import { TUserState } from './types';
import { getUser } from './asyncActions';

const initialState: TUserState = {
  loading: false,
  error: null,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.phoneNumber = action.payload.phoneNumber;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
        state.error = action.error.message!;
      });
  },
});

export default userSlice.reducer;
