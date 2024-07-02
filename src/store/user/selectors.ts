import { RootState } from '../store';

export const selectUserData = (state: RootState) => state.user;
export const selectAuthData = (state: RootState) => state.user.isAuth;
