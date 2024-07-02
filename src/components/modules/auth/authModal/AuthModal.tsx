import styles from "./authModal.module.scss";

import { useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import { useOutsideModalClick } from "hooks/useOutsideModalClick";

type TAuthModalProps = {
  children: React.ReactNode;
};

export function AuthModal({ children }: TAuthModalProps) {
  const { onCloseRegisterForm } = useAuth();
  const overlayRef = useOutsideModalClick(onCloseRegisterForm);

  //remove background scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.btnClose} onClick={onCloseRegisterForm}>
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
