import styles from "./registerForm.module.scss";

import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

const registerFields = [
  {
    id: 1,
    type: "text",
    label: "Ваше ім’я *",
    placeholder: "Введіть ваше ім’я",
    value: "first_name",
  },
  {
    id: 2,
    type: "text",
    label: "Ваше прізвище *",
    placeholder: "Введіть ваше прізвище",
    value: "last_name",
  },
  {
    id: 3,
    type: "number",
    label: "Номер телефону *",
    placeholder: "+38",
    value: "phone_number",
  },
  {
    id: 4,
    type: "email",
    label: "Електронна пошта *",
    placeholder: "Введіть електронну пошту",
    value: "email",
  },
  {
    id: 5,
    type: "password",
    label: "Пароль *",
    placeholder: "Введіть пароль",
    value: "password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
  },
  {
    id: 6,
    type: "password",
    label: "Підтвердіть пароль *",
    placeholder: "Введіть пароль",
    value: "confirm_password",
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
  },
];

export function RegisterForm() {
  return (
    <form>
      {registerFields.map((field) => (
        <label key={field.id}>
          <span className={styles.text}>{field.label}</span>

          <div className={styles.input_box}>
            <input type={field.type} placeholder={field.placeholder} />

            {field.iconOpenEye && (
              <span className={styles.eye_icon}>{field.iconCloseEye}</span>
            )}
          </div>
        </label>
      ))}

      <label className={styles.checkbox_container}>
        <input type="checkbox" className={styles.checkbox} />
        <span>Я ознайомлений(-а) з публічною офертою та приймаю її</span>
      </label>

      <button className={styles.btn_submit} type="submit">
        Зареєструватись
      </button>
    </form>
  );
}

// for validation confirm password
// const schema = z.object({
//     // ... other fields in your array
//     password: z.string().min(6, "Password must be at least 6 characters").trim(),
//     confirmPassword: z.string().equalTo(z.ref('password'), { message: "Passwords must match" }),
//   });
