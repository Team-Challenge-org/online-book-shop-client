import styles from "./enterOrRegisterAccount.module.scss";

import { Link } from "react-router-dom";

type TEnterOrRegisterAccountProps = {
  text: string;
  link: string;
  linkText: string;
};

export default function EnterOrRegisterAccount({
  text,
  link,
  linkText,
}: TEnterOrRegisterAccountProps) {
  return (
    <div className={styles.block}>
      <p>{text}</p>

      <Link to={link} className={styles.link}>
        {linkText}
      </Link>
    </div>
  );
}
