import axios from 'axios';
import { Endpoints } from 'constants/api';
import { useState } from 'react';
import styles from 'styles/footer/index.module.scss';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    await axios.post(`${Endpoints.SEND_EMAIL}${email}`);
  };

  return (
    <div className={styles.footer__subscribe}>
      <h1 className={styles.footer__subscribe__title}>Підпишіться на розсилку</h1>
      <span className={styles.footer__subscribe__text}>
        Дізнавайтесь першими про нові книги та спецпропозиції від магазину TCL{' '}
      </span>
      <form className={styles.footer__subscribe__form}>
        <input
          type='email'
          placeholder='Ваша електронна адреса'
          className={styles.footer__subscribe__form__input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className={styles.footer__subscribe__form__button}
          onClick={() => handleSubscribe()}
          type='submit'>
          Підписатись
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
