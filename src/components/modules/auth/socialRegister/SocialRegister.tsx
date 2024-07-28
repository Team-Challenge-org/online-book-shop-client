import styles from "./socialRegister.module.scss";

import { AppDispatch } from "store/store";
import { useGoogleLogin } from "@react-oauth/google";
import { selectUserData } from "store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loginUserGoogle } from "store/user/asyncActions";
import { useAuth } from "contexts/AuthContext";

export function SocialRegister() {
  const { user: userData } = useSelector(selectUserData);
  const { isRegisterForm } = useAuth();

  const dispatch = useDispatch<AppDispatch>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>
      dispatch(loginUserGoogle(codeResponse.access_token)),
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {isRegisterForm ? "Реєстрація " : "Вхід до акаунту"}
      </h1>
      {userData ? (
        ""
      ) : (
        <ul className={styles.list}>
          <li className={styles.list__item} onClick={() => login()}>
            <img src="/img/google_icon.png" alt="google logo" />
            <span>Продовжити через Google</span>
          </li>

          <li className={styles.list__item}>
            <img src="/img/facebook_icon.png" alt="facebook logo" />
            <span>Продовжити через Facebook</span>
          </li>
        </ul>
      )}
      <div className={styles.line}>
        <span>або</span>
      </div>
    </div>
  );
}
