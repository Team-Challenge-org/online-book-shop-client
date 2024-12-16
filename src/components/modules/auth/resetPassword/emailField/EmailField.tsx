import styles from "./emailField.module.scss";

import { useFormContext } from "react-hook-form";

export function EmailField({ errorMessage }: { errorMessage?: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label>
        <p className={styles.label_text}>Введіть свою електронну пошту для створення нового пароля</p>

        <div className={errors?.email || errorMessage ? styles.input_box_error : styles.input_box}>
          <input type="text" placeholder="Введіть електронну пошту" {...register("email")} />
        </div>
      </label>
    </>
  );
}
