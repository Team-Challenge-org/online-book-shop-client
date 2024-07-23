import styles from "./emailCheckerForPasswordResetForm.module.scss";

import {
  emailCheckerSchema,
  type TEmailCheckerSchema,
} from "validations/emailCheckerSchema";
import { useEffect } from "react";
import { AppDispatch } from "store/store";
import { EmailField } from "../emailField/EmailField";
import { zodResolver } from "@hookform/resolvers/zod";
import { selectUserData } from "store/user/selectors";
import { AuthModal } from "../../authModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { resetEmailCheckState } from "store/user/userSlice";
import { checkEmailForResetPassword } from "store/user/asyncActions";
import { useAuth } from "contexts/AuthContext";

export function EmailCheckerForPasswordResetForm() {
  const methods = useForm<TEmailCheckerSchema>({
    resolver: zodResolver(emailCheckerSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const { onCloseEmailCheckerForm } = useAuth();

  const {
    isEmailChecked,
    error: isError,
    loading: isCheckingEmail,
  } = useSelector(selectUserData);

  useEffect(() => {
    if (isEmailChecked) {
      alert(
        "🟢Email существует. Инструкции по сбросу пароля отправлены на почту."
      );
      dispatch(resetEmailCheckState());
      onCloseEmailCheckerForm();
    }

    if (isError && !isEmailChecked) {
      alert("🔴Такого пользователя не существует");
      dispatch(resetEmailCheckState());
    }
  }, [isEmailChecked, isError, dispatch, onCloseEmailCheckerForm]);

  const handleEmailValidation = async () => {
    await methods.trigger("email"); // is valid email
  };

  function onSubmitData(data: TEmailCheckerSchema) {
    if (methods.formState.isValid) {
      dispatch(checkEmailForResetPassword(data.email));
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitData)}>
        <AuthModal>
          <EmailField />

          <button
            type="submit"
            onClick={handleEmailValidation}
            className={
              methods.formState.isValid
                ? styles.btn_active
                : styles.btn_unactive
            }
          >
            {isCheckingEmail
              ? "Перевірка користувача"
              : "Створити новий пароль"}
          </button>
        </AuthModal>
      </form>
    </FormProvider>
  );
}
