import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import styles from './socialRegister.module.scss';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export function SocialRegister() {
  
//   const responseMessage = (response: CredentialResponse) => {
//     console.log(response);
// };
     

const [user, setUser] = useState<User | null>(null);
const onSuccess = async (res: CredentialResponse) => {
  try {
    const result = res
    console.log(result)

  } catch (err) {
    console.log(err);
  }
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


      {!user && (
        <GoogleLogin
          onSuccess={onSuccess}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
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
