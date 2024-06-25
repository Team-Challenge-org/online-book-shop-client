import styles from "./registerField.module.scss";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { TRegisterField } from "../../registerForm/RegisterForm";

export function RegisterField({ field }: { field: TRegisterField }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [passwordHidden, setPasswordHidden] = useState(true);

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
            {passwordHidden ? field.iconOpenEye : field.iconCloseEye}
          </span>
        )}
      </div>

      {/* Display error message if any */}
      {errors?.[field.valueName] && (
        <ErrorMessage message={errors[field.valueName]?.message as string} />
      )}
    </label>
  );
}
