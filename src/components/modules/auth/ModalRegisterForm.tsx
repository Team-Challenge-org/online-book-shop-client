import { AuthModal } from './authModal/AuthModal';
import { RegisterForm } from './registerForm/RegisterForm';
import { SocialRegister } from './socialRegister/SocialRegister';
import LoginForm from './loginForm/LoginForm';
import { useState } from 'react';
import styles from './shared/enterOrRegisterAccount/enterOrRegisterAccount.module.scss';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'store/user/selectors';
import LogoutPageLogic from 'pages/LoginPage/LogoutPageLogic';

export default function ModalRegisterForm() {
  const [showLogin, setShowLogin] = useState(false);
  const auth = useSelector(selectAuthData);

  return (
    <AuthModal>
      <SocialRegister />

      {auth ? (
        <LogoutPageLogic />
      ) : (
        <>
          {showLogin ? <LoginForm /> : <RegisterForm />}

          <div className={styles.block}>
            <p>{showLogin ? 'Немає акаунту?' : 'Вже маєте акаунт?'}</p>

            <span className={styles.link} onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'Зареєструватись' : 'Увійти'}
            </span>
          </div>
        </>
      )}
    </AuthModal>
  );
}
