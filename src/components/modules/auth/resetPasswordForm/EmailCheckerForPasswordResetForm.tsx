import styles from "./resetPasswordModalForm.module.scss";

import {
  emailCheckerSchema,
  type TEmailCheckerSchema,
} from "validations/resetPasswordSchema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthModal } from "../authModal/AuthModal";
import { EmailField } from "./emailField/EmailField";
import { FormProvider, useForm } from "react-hook-form";
import { NewPasswordField } from "./newPasswordField/NewPasswordField";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { checkEmailForResetPassword } from "store/user/asyncActions";
import { AppDispatch } from "store/store";
import { selectUserData } from "store/user/selectors";

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

export function EmailCheckerForPasswordResetForm() {
  const methods = useForm<TEmailCheckerSchema>({
    resolver: zodResolver(emailCheckerSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const checkEmail = useSelector(selectUserData);

  const handleEmailValidation = async () => {
    await methods.trigger("email"); // Is valid email
  };

  function onSubmitData(data: TEmailCheckerSchema) {
    if (methods.formState.isValid) {
      dispatch(checkEmailForResetPassword(data.email));
    }
  }

  // TODO: show notification if there is email in data base and there is not
  // checkEmail.loading
  // checkEmail.error

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitData)}>
        <AuthModal>
          <EmailField />

          <button
            type="submit"
            onClick={handleEmailValidation}
            className={styles.btn_active}
          >
            Створити новий пароль
          </button>
        </AuthModal>
      </form>
    </FormProvider>
  );
}

{
  /* // <>
  //   <h2 className={styles.title}>Створення нового пароля</h2>
  //   {resetPasswordFields.map((field) => (
  //     <NewPasswordField key={field.id} field={field} />
  //   ))}
  //   <button
  //     type="submit"
  //     className={
  //       methods.formState.isValid
  //         ? styles.btn_active
  //         : styles.btn_unactive
  //     }
  //   >
  //     Змінити пароль
  //   </button>
  // </> */
}
