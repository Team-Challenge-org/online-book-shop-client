export enum userStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TUserState = {
  loading: boolean;
  user: string | null | any;
  error: null | string;
  isAuth: boolean | null;
  isEmailChecked: boolean;
  isPasswordReset: boolean;
  showMessage: boolean;
};

export type TUser = {
  emailOrPhone: string | null;
  password: string | null;
  isRememberMe: boolean | null;
};
