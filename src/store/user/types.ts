export enum userStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TUserState = {
  loading: boolean;
  error: null | string;
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
