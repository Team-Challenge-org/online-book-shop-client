export enum authStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TAuthState = {
  loading: boolean;
  error: null | string;
  status: authStatus;
  isAuth: boolean | undefined;
  isEmailChecked: boolean;
  isPasswordReset: boolean;
  showMessage: boolean;
};

export type TUser = {
  emailOrPhone: string | null;
  password: string | null;
  rememberMe: boolean | null;
};
