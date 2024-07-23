import styles from "./registerField.module.scss";

import type { TRegisterField } from "types/auth";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { usePasswordComplexity } from "hooks/usePasswordComplexity";
import { PasswordComplexity } from "../passwordComplexity/PasswordComplexity";
import { useAuth } from "contexts/AuthContext";

type TRegisterFieldProps = {
  field: TRegisterField;
  resetPassword?: boolean;
};

export function RegisterField({ field, resetPassword }: TRegisterFieldProps) {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();
  const { onShowEmailCheckerForm } = useAuth();
  const passwordValue = watch("password");

  const {
    passwordHidden,
    isPasswordField,
    setPasswordHidden,
    passwordComplexity,
    passwordComplexityMessage,
  } = usePasswordComplexity(passwordValue, field);

  return (
    <label key={field.id}>
      <div className={styles.text_box}>
        <span>{field.label}</span>

        {resetPassword && (
          <span className={styles.reset_pass} onClick={onShowEmailCheckerForm}>
            Забули пароль?
          </span>
        )}
      </div>

      <div
        className={
          errors?.[field.valueName] ? styles.input_box_error : styles.input_box
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

      {/* Display error message if any */}
      {errors?.[field.valueName] && (
        <ErrorMessage
          message={errors[field.valueName]?.message as string}
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
  );
}
