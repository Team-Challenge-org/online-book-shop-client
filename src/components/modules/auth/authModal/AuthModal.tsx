import styles from "./authModal.module.scss";

import React from "react";

type TAuthModalProps = {
  children: React.ReactNode;
  onCloseModal?: () => void;
};

export function AuthModal({ children, onCloseModal }: TAuthModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.btnClose} onClick={onCloseModal}>
          &times;
        </button>

        {children}

      </div>
    </div>
  );
}
