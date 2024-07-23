import styles from './socialRegister.module.scss';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function SocialRegister() {
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    console.log('logout');
  };

  console.log(profile);
  console.log(user);

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

          {profile ? (
            <div>
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={() => logOut()}>Log out</button>
            </div>
          ) : (
            <button onClick={() => login()}>Sign in with Google 🚀 </button>
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
