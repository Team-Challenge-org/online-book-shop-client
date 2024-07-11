import styles from "./resetPasswordModalForm.module.scss";

import {
  resetPasswordSchema,
  TResetPasswordSchema,
} from "validations/resetPasswordSchema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthModal } from "../authModal/AuthModal";
import { EmailField } from "./emailField/EmailField";
import { FormProvider, useForm } from "react-hook-form";
import { NewPasswordField } from "./newPasswordField/NewPasswordField";
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

export function ResetPasswordModalForm() {
  const methods = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailValidation = async () => {
    const isValid = await methods.trigger("email");

    console.log(isValid);

    if (isValid) {
      setIsValidEmail(true);
    }
  };

  function onSubmitData(data: TResetPasswordSchema) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitData)}>
        <AuthModal>
          {isValidEmail ? (
            <>
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
                Змінити пароль
              </button>
            </>
          ) : (
            <>
              <EmailField />
              <button
                type="button"
                onClick={handleEmailValidation}
                className={styles.btn_active}
              >
                Створити новий пароль
              </button>
            </>
          )}
        </AuthModal>
      </form>
    </FormProvider>
  );
}
