import { RootState } from '../store';

export const selectAuthData = (state: RootState) => state.auth;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectShowMessage = (state: RootState) => state.auth.showMessage;
