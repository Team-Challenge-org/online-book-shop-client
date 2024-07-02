import styles from "./registerField.module.scss";

import type { TRegisterField } from "types/auth";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { usePasswordComplexity } from "hooks/usePasswordComplexity";
import { PasswordComplexity } from "../passwordComplexity/PasswordComplexity";

export function RegisterField({ field }: { field: TRegisterField }) {
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
    <label key={field.id}>
      <span className={styles.text}>{field.label}</span>

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
