import styles from "./registerForm.module.scss";

import type { TRegisterField } from "types/auth";

import {
  registerUserSchema,
  TRegisterUserSchema,
} from "validations/registerUserSchema";

import { AppDispatch } from "store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "pages/AuthContext";
import { MdOutlineVisibility } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { selectUserData } from "store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "store/user/asyncActions";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FormProvider, useForm } from "react-hook-form";
import Spinner from "components/elements/Spinner/Spinner";
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
  const { loading } = useSelector(selectUserData);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { setIsRegisterForm, onCloseRegisterForm } = useAuth();

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setIsRegisterForm(true);
  }, [loading, setIsRegisterForm]);

  const methods = useForm<TRegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [isPublicOfferAccepted, setIsPublicOfferAccepted] = useState(false);

  function onSubmitData(data: TRegisterUserSchema) {
    if (isPublicOfferAccepted) {
      dispatch(registerUser(data));
      navigate("/");
      methods.reset();
      onCloseRegisterForm();
    }
  }

  const activeBtnSubmit =
    isValid && isPublicOfferAccepted ? styles.btn_active : styles.btn_unactive;

  return (
    <FormProvider {...methods}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmitData)}>
          {registerFields.map((field) => (
            <RegisterField field={field} key={field.id} />
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

          <button className={activeBtnSubmit} type="submit">
            Зареєструватись
          </button>
        </form>
      )}
    </FormProvider>
  );
}
