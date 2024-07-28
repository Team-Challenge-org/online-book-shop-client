import styles from "./errorMessage.module.scss";

import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { ErrorTooltip } from "../errorTooltip/ErrorTooltip";

type TErrorMessageProps = {
  message: string | undefined;
  errorTips?: string[] | undefined;
};

export function ErrorMessage({ message, errorTips }: TErrorMessageProps) {
  const [isShownTooltip, setIsShownTooltip] = useState(false);

  return (
    <div className={styles.error_message_container}>
      <span className={styles.error_message}>{message}</span>

      {errorTips && message !== "Такого користувача не існує" && (
        <MdInfoOutline
          className={styles.error_info}
          onMouseEnter={() => setIsShownTooltip(true)}
          onMouseLeave={() => setIsShownTooltip(false)}
        />
      )}

      {isShownTooltip ? (
        <ErrorTooltip
          addListStyle={true}
          errorTips={errorTips}
          tooltipType="commonTooltip"
        />
      ) : (
        ""
      )}
    </div>
  );
}
