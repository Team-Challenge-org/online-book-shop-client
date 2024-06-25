import styles from "./registerForm.module.scss";

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

export type TRegisterField = {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  valueName:
    | "first_name"
    | "last_name"
    | "phone_number"
    | "email"
    | "password"
    | "confirm_password";
  iconOpenEye?: JSX.Element;
  iconCloseEye?: JSX.Element;
};

const registerFields: TRegisterField[] = [
  {
    id: 1,
    type: "text",
    label: "Ваше ім’я *",
    placeholder: "Введіть ваше ім’я",
    valueName: "first_name",
  },
  {
    id: 2,
    type: "text",
    label: "Ваше прізвище *",
    placeholder: "Введіть ваше прізвище",
    valueName: "last_name",
  },
  {
    id: 3,
    type: "number",
    label: "Номер телефону *",
    placeholder: "+38",
    valueName: "phone_number",
  },
  {
    id: 4,
    type: "email",
    label: "Електронна пошта *",
    placeholder: "Введіть електронну пошту",
    valueName: "email",
  },
  {
    id: 5,
    type: "password",
    label: "Пароль *",
    placeholder: "Введіть пароль",
    valueName: "password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
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
