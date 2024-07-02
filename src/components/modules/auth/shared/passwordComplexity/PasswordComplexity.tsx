import styles from "./passwordComplexity.module.scss";

import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { ErrorTooltip } from "../errorTooltip/ErrorTooltip";

type TPasswordComplexityProps = {
  passwordComplexity: string;
  passwordComplexityMessage: string | undefined;
};

const errorTips = [
  "Використовуйте комбінацію великих та малих літер, арабських цифр та спеціальних символів для створення більш надійного пароля ",
];

export function PasswordComplexity({
  passwordComplexity,
  passwordComplexityMessage,
}: TPasswordComplexityProps) {
  const [isShownTooltip, setIsShownTooltip] = useState(false);

  const isWeak = passwordComplexity === "weak";
  const isMedium = passwordComplexity === "medium";
  const isStrong = passwordComplexity === "strong";

  return (
    <div className={styles.password_complexity}>
      <ul className={styles.indicator_list}>
        <li
          className={`${styles.indicator} ${isWeak && styles.weak}
      ${isMedium && styles.medium}  
      ${isStrong && styles.strong}  
      `}
        ></li>

        <li
          className={`${styles.indicator} ${isMedium && styles.medium}
        ${isStrong && styles.strong}  
        
      `}
        ></li>

        <li className={`${styles.indicator} ${isStrong && styles.strong}`}></li>
      </ul>

      <div className={styles.message_box}>
        <span
          className={`${isWeak && styles.red_message} 
          ${isMedium && styles.yellow_message} 
          ${isStrong && styles.green_message} `}
        >
          {passwordComplexityMessage}
        </span>

        {!isStrong && (
          <MdInfoOutline
            className={`${styles.error_info} ${isWeak && styles.red_message} 
          ${isMedium && styles.yellow_message} 
          ${isStrong && styles.green_message} `}
            onMouseEnter={() => setIsShownTooltip(true)}
            onMouseLeave={() => setIsShownTooltip(false)}
          />
        )}

        {isShownTooltip ? (
          <ErrorTooltip
            tooltipType="passwordTooltip"
            isWeakPass={isWeak}
            addListStyle={false}
            errorTips={errorTips}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
