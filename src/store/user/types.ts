export enum userStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TUserState = {
  loading: boolean;
  user: string | null;
  error: null | string;
  isAuth: boolean | null;
};

export type TUser = {
  email: string | null;
  password: string | null;
  isRememberMe: boolean | null;
};
