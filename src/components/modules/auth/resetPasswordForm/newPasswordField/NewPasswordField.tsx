import styles from "./newPasswordFields.module.scss";

import { useFormContext } from "react-hook-form";
import { TResetPasswordField } from "../ResetPasswordModalForm";
import { usePasswordComplexity } from "hooks/usePasswordComplexity";
import { ErrorMessage } from "../../shared/errorMessage/ErrorMessage";
import { PasswordComplexity } from "../../shared/passwordComplexity/PasswordComplexity";

type TNewPasswordFieldProps = {
  field: TResetPasswordField;
};

export function NewPasswordField({ field }: TNewPasswordFieldProps) {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const passwordValue = watch("password");

  const {
    passwordHidden,
    isPasswordField,
    setPasswordHidden,
    passwordComplexity,
    passwordComplexityMessage,
  } = usePasswordComplexity(passwordValue, field);

  return (
    <>
      <label key={field.id}>
        <div className={styles.text_box}>
          <span>{field.label}</span>
        </div>

        <div
          className={
            errors?.[field.valueName]
              ? styles.input_box_error
              : styles.input_box
          }
        >
          <input
            type={passwordHidden ? field.type : "text"}
            placeholder={field.placeholder}
            {...register(field.valueName)}
          />

          {field.iconOpenEye && (
            <span
              className={styles.eye_icon}
              onClick={() => setPasswordHidden((prev) => !prev)}
            >
              {passwordHidden ? field.iconCloseEye : field.iconOpenEye}
            </span>
          )}
        </div>

        {errors?.[field.valueName] && (
          <ErrorMessage
            message={errors?.[field.valueName]?.message as string}
            errorTips={field.errorTips}
          />
        )}

        {isPasswordField && (
          <PasswordComplexity
            passwordComplexity={passwordComplexity}
            passwordComplexityMessage={passwordComplexityMessage}
          />
        )}
      </label>
    </>
  );
}
