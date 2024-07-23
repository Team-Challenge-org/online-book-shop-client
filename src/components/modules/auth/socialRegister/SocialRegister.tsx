import styles from './socialRegister.module.scss';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserGoogle } from 'store/user/asyncActions';
import { AppDispatch } from 'store/store';
import { selectUserData } from 'store/user/selectors';

export function SocialRegister() {
  const [user, setUser] = useState<any>([]);
  const { user: userData } = useSelector(selectUserData);

  const dispatch = useDispatch<AppDispatch>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      dispatch(loginUserGoogle(user.access_token))
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Реєстрація</h1>

      <ul className={styles.list}>
        <li className={styles.list__item}>
          {/* <Link to="/">
            <img src="/img/google_icon.png" alt="google logo" />
            <span>Продовжити через Google</span>
          </Link> */}
          {/* <GoogleLogin onSuccess={responseMessage} /> */}

          {userData ? (
            ''
          ) : (
            <button onClick={() => login()}><img src="/img/google_icon.png" alt="google logo" />
            <span>Продовжити через Google</span></button>
          )}
        </li>

        <li className={styles.list__item}>
          <Link to="/">
            <img src="/img/facebook_icon.png" alt="facebook logo" />
            <span>Продовжити через Facebook</span>
          </Link>
        </li>
      </ul>

      <div className={styles.line}>
        <span>або</span>
      </div>
    </div>
  );
}
