import styles from "./enterOrRegisterAccount.module.scss";

import { useState } from "react";
import LoginForm from "../../loginForm/LoginForm";
import { RegisterForm } from "../../registerForm/RegisterForm";

export default function EnterOrRegisterAccount() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginForm /> : <RegisterForm />}

      <div className={styles.block}>
        <p>{showLogin ? "Немає акаунту?" : "Вже маєте акаунт?"}</p>

        <span className={styles.link} onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Зареєструватись" : "Увійти"}
        </span>
      </div>
    </>
  );
}
