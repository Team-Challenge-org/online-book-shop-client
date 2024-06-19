import styles from "./socialRegister.module.scss";

import { Link } from "react-router-dom";

export function SocialRegister() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Реєстрація</h1>

      <ul>
        <li>
          <Link to="/">
            <img src="/img/google_icon.png" alt="google logo" />
            <span>Продовжити через Google</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <img src="/img/facebook_icon.png" alt="facebook logo" />
            <span>Продовжити через Facebook</span>
          </Link>
        </li>
      </ul>

      <div className={styles.line}>
        <span>або</span>
      </div>
    </div>
  );
}
