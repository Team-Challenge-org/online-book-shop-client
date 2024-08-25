import styles from './authModal.module.scss';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { selectIsAuth } from 'store/auth/selectors';
import { useOutsideModalClick } from 'hooks/useOutsideModalClick';

type TAuthModalProps = {
  children: React.ReactNode;
};

export function AuthModal({ children }: TAuthModalProps) {
  const {
    showRegisterForm,
    onCloseRegisterForm,

    showEmailCheckerForm,
    onCloseEmailCheckerForm,

    showResetPasswordForm,
    onCloseResetPasswordForm,
  } = useAuth();

  const auth = useSelector(selectIsAuth);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  let closeModalForm: () => void = () => {};

  if (showRegisterForm) closeModalForm = onCloseRegisterForm;
  if (showEmailCheckerForm) closeModalForm = onCloseEmailCheckerForm;
  if (showResetPasswordForm) closeModalForm = onCloseResetPasswordForm;

  const overlayRef = useOutsideModalClick(closeModalForm);

  //remove background scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.modal}>
        {isAuth ? (
          ''
        ) : (
          <button className={styles.btnClose} onClick={closeModalForm}>
            &times;
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
