import { FormProvider, useForm } from "react-hook-form";
import styles from "./registerForm.module.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import {
  registerUserSchema,
  TRegisterUserSchema,
} from "validations/registerUserSchema";

type TRegisterFields = {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  valueName: string;
  iconOpenEye?: JSX.Element;
  iconCloseEye?: JSX.Element;
};

const registerFields: TRegisterFields[] = [
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmitData(data: TRegisterUserSchema) {
    console.log(data);
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitData)}>
        {registerFields.map((field) => {
          // console.log(typeof field.valueName);

          return (
            <label key={field.id}>
              <span className={styles.text}>{field.label}</span>

              <div className={styles.input_box}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.valueName)}
                />

                {field.iconOpenEye && (
                  <span className={styles.eye_icon}>{field.iconCloseEye}</span>
                )}

                {/* Display error message if any */}
                {/* {errors?.field.value?.message && (
                <span className={styles.error_message}>
                  {errors[field.value].message}
                </span>
              )} */}
              </div>
            </label>
          );
        })}

        <label className={styles.checkbox_container}>
          <input type="checkbox" className={styles.checkbox} />
          <span>Я ознайомлений(-а) з публічною офертою та приймаю її</span>
        </label>

        <button className={styles.btn_submit} type="submit">
          Зареєструватись
        </button>
      </form>
    </FormProvider>
  );
}
