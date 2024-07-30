import styles from "./emailField.module.scss";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../../shared/errorMessage/ErrorMessage";

const emailErrorTips = [
  "Ви можете використовувати лише арабські цифри, латиницю та наступні символи ~ ! $ % ^ & * _ = + } { ' ? - @.",
  "Ви можете використовувати великі та малі літери.",
  "Пошта має містити “@”.",
  "Пошта повинна мати будь-який діючий домен окрім “mail.ru”, “yandex.ru” та інших доменів, пов'язаних з росією.",
];

export function EmailField({ errorMessage }: { errorMessage?: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label>
        <p className={styles.label_text}>
          Введіть свою електронну пошту для створення нового пароля
        </p>

        <div
          className={
            errors?.email || errorMessage
              ? styles.input_box_error
              : styles.input_box
          }
        >
          <input
            type="email"
            placeholder="Введіть електронну пошту"
            {...register("email")}
          />
        </div>

        {(errors.email || errorMessage) && (
          <ErrorMessage
            message={(errors.email?.message as string) || errorMessage}
            errorTips={emailErrorTips}
          />
        )}
      </label>
    </>
  );
}
