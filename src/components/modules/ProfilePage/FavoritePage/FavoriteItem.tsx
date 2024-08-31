import React from 'react';
import styles from '../profilePage.module.scss';

export default function FavoriteItem() {
  return (
    <div className={styles.profile__favorite}>
      <img className={styles.profile__favorite__image} src='' alt='' />
      <span className={styles.profile__favorite__subtitle}>author</span>
      <span className={styles.profile__favorite__title}>title</span>
      <span className={styles.profile__favorite__price}>price </span>
      <button className={`button ${styles.profile__favorite__button}`}>Додати у кошик</button>
    </div>
  );
}
