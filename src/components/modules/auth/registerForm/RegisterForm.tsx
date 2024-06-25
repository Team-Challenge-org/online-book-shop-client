import styles from "./registerForm.module.scss";

import type { TRegisterField } from "types/auth";

import {
  registerUserSchema,
  TRegisterUserSchema,
} from "validations/registerUserSchema";

import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterField } from "../shared/registerField/RegisterField";

const registerFields: TRegisterField[] = [
  {
    id: 1,
    type: "text",
    label: "Ваше ім’я *",
    placeholder: "Введіть ваше ім’я",
    valueName: "first_name",
    errorTips: [
      "Ви можете використовувати лише кирилицю, латиницю та арабські цифри.",
      "Ви можете використовувати великі та малі літери.",
      "Довжина імені має бути від 2 до 30 символів.",
    ],
  },
  {
    id: 2,
    type: "text",
    label: "Ваше прізвище *",
    placeholder: "Введіть ваше прізвище",
    valueName: "last_name",
    errorTips: [
      "Ви можете використовувати лише кирилицю, латиницю та арабські цифри.",
      "Ви можете використовувати великі та малі літери.",
      "Довжина імені має бути від 2 до 50 символів.",
    ],
  },
  {
    id: 3,
    type: "number",
    label: "Номер телефону *",
    placeholder: "+38",
    valueName: "phone_number",
    errorTips: [
      "Ви можете використовувати лише арабські цифри та «+».",
      "Довжина мобільного номера має бути 13 символів, включаючи «+».",
    ],
  },
  {
    id: 4,
    type: "email",
    label: "Електронна пошта *",
    placeholder: "Введіть електронну пошту",
    valueName: "email",
    errorTips: [
      "Ви можете використовувати лише арабські цифри, латиницю та наступні символи ~ ! $ % ^ & * _ = + } { ' ? - @.",
      "Ви можете використовувати великі та малі літери.",
      "Пошта має містити “@”.",
      "Пошта повинна мати будь-який діючий домейн окрім “mail.ru”, “yandex.ru” та інших доменів, пов'язаних з росією.",
    ],
  },
  {
    id: 5,
    type: "password",
    label: "Пароль *",
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
    id: 6,
    type: "password",
    label: "Підтвердіть пароль *",
    placeholder: "Введіть пароль",
    valueName: "confirm_password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
  },
];

export function RegisterForm() {
  const methods = useForm<TRegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const [isPublicOfferAccepted, setIsPublicOfferAccepted] = useState(false);
  const { handleSubmit } = methods;

  function onSubmitData(data: TRegisterUserSchema) {
    if (isPublicOfferAccepted) {
      console.log(data);
      methods.reset();
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitData)}>
        {registerFields.map((field) => (
          <RegisterField key={field.id} field={field} />
        ))}

        <label className={styles.checkbox_container}>
          <input
            type="checkbox"
            checked={isPublicOfferAccepted}
            onChange={() => setIsPublicOfferAccepted((prev) => !prev)}
            className={styles.checkbox}
          />
          <span>Я ознайомлений(-а) з публічною офертою та приймаю її</span>
        </label>

        <button className={styles.btn_submit} type="submit">
          Зареєструватись
        </button>
      </form>
    </FormProvider>
  );
}
