export type TRegisterField = {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  valueName:
    | 'first_name'
    | 'last_name'
    | 'phone_number'
    | 'email'
    | 'password'
    | 'confirm_password'
    | 'email_or_number'
    | 'login_password'
    | 'recipient_first_name'
    | 'recipient_last_name'
    | 'recipient_phone_number';
  errorTips?: string[];
  iconOpenEye?: JSX.Element;
  iconCloseEye?: JSX.Element;
};
