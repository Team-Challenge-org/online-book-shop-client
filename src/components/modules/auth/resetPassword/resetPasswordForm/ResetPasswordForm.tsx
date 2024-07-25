import styles from "./resetPasswordForm.module.scss";

import {
  resetPasswordSchema,
  TResetPasswordSchema,
} from "validations/resetPasswordSchema";
import { useEffect } from "react";
import { AppDispatch } from "store/store";
import { NAV_URL } from "constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { selectUserData } from "store/user/selectors";
import { AuthModal } from "../../authModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "store/user/asyncActions";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NewPasswordField } from "../newPasswordField/NewPasswordField";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export type TResetPasswordField = {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  valueName: "password" | "confirm_password";

  errorTips?: string[];
  iconOpenEye?: JSX.Element;
  iconCloseEye?: JSX.Element;
};

const resetPasswordFields: TResetPasswordField[] = [
  {
    id: 1,
    type: "password",
    label: "Введіть новий пароль *",
    placeholder: "Введіть пароль",
    valueName: "password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
    errorTips: [
      "Ви можете використовувати лише арабські цифри, латиницю та наступні символи ~ ! $ % ^ & * _ = + } { ' ? -",
      "Ви можете використовувати великі та малі літери.",
      "Довжина пароля має бути від 8 до 30 символів.",
      "Використовуйте комбінацію великих та малих літер, арабських цифр та спеціальних символів для створення більш надійного пароля.",
      "Перевірте чи ввімкнено CapsLock.",
    ],
  },
  {
    id: 2,
    type: "password",
    label: "Підтвердіть новий пароль *",
    placeholder: "Введіть пароль",
    valueName: "confirm_password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
  },
];

export default function ResetPasswordForm() {
  const methods = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [searchParams] = useSearchParams();
  const urlToken = searchParams.get("token");

  const navigate = useNavigate();
  const {
    error: isError,
    isPasswordReset,
    loading: isUpdatingPassword,
  } = useSelector(selectUserData);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isPasswordReset) {
      alert("🟢Successfully changed password");
    }

    if (isError && !isPasswordReset) {
      alert("🔴Problem to change pass");
    }
  }, [isPasswordReset, isError, dispatch]);

  function onSubmitData(data: TResetPasswordSchema) {
    const newPasswordData = {
      token: urlToken,
      newPassword: data?.password,
    };

    dispatch(resetPassword(newPasswordData));

    if (isPasswordReset) {
      navigate(NAV_URL.HOME_PAGE);
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitData)}>
        <AuthModal>
          <h2 className={styles.title}>Створення нового пароля</h2>
          {resetPasswordFields.map((field) => (
            <NewPasswordField key={field.id} field={field} />
          ))}

          <button
            type="submit"
            className={
              methods.formState.isValid
                ? styles.btn_active
                : styles.btn_unactive
            }
          >
            {isUpdatingPassword ? "Обновление пароля" : "Змінити пароль"}
          </button>
        </AuthModal>
      </form>
    </FormProvider>
  );
}
