import styles from './socialRegister.module.scss';

import { AppDispatch } from 'store/store';
import { useGoogleLogin } from '@react-oauth/google';
import { selectIsAuth } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserGoogle } from 'store/auth/asyncActions';
import { useAuth } from 'contexts/AuthContext';
import ProfileModal from '../ProfileModal/ProfileModal';
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export function SocialRegister() {
  const isAuth = useSelector(selectIsAuth);
  const { isRegisterForm } = useAuth();

  const dispatch = useDispatch<AppDispatch>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => dispatch(loginUserGoogle(codeResponse.access_token)),
    onError: (error) => console.log('Login Failed:', error),
  });

  const handleFacebookCallback = (response: any) => {
    if (response?.status === 'unknown') {
      console.error('Sorry!', 'Something went wrong with facebook Login.');
      return;
    }
    console.log(response);
  };

  return (
    <>
      {isAuth ? (
        <ProfileModal />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>{isRegisterForm ? 'Реєстрація ' : 'Вхід до акаунту'}</h1>

          <ul className={styles.list}>
            <li className={styles.list__item} onClick={() => login()}>
              <img src='/img/google_icon.png' alt='google logo' />
              <span>Продовжити через Google</span>
            </li>

            <li className={styles.list__item}>
              <img src='/img/facebook_icon.png' alt='facebook logo' />
              <span>Продовжити через Facebook</span>

              {/*<FacebookLogin
              appId='522254420463237'
              autoLoad={false}
              fields='name,email'
              callback={handleFacebookCallback}
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  <img src='/img/facebook_icon.png' alt='facebook logo' />
                  <span>Продовжити через Facebook</span>
                </button>
              )}
            />*/}
            </li>
          </ul>

          <div className={styles.line}>
            <span>або</span>
          </div>
        </div>
      )}
    </>
  );
}
