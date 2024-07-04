import { AuthModal } from './authModal/AuthModal';
import { RegisterForm } from './registerForm/RegisterForm';
import { SocialRegister } from './socialRegister/SocialRegister';
import LoginForm from './loginForm/LoginForm';
import { useEffect, useState } from 'react';
import styles from './shared/enterOrRegisterAccount/enterOrRegisterAccount.module.scss';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectAuthData } from 'store/user/selectors';
import { AppDispatch } from 'store/store';
import { logout } from 'store/user/userSlice';

export default function ModalRegisterForm() {
  const [showLogin, setShowLogin] = useState(false);
  const auth = useSelector(selectAuthData, shallowEqual);
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    if (auth) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [auth])

  return (
    <AuthModal>
      <SocialRegister />

      {isAuth ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
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
