import styles from "./errorMessage.module.scss";

import { MdInfoOutline } from "react-icons/md";

export function ErrorMessage({ message }: { message: string | undefined }) {
  return (
    <div className={styles.error_message_container}>
      <span className={styles.error_message}>{message}</span>

      <MdInfoOutline className={styles.error_info} />
    </div>
  );
}
