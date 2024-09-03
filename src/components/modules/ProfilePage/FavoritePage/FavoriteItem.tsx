import React from 'react';
import styles from '../profilePage.module.scss';
import { TFavoriteItem } from 'store/favorite/types';
import { useNavigate } from 'react-router-dom';
import { NAV_URL } from 'constants/global';

export default function FavoriteItem({ obj }: { obj: TFavoriteItem }) {
  const navigate = useNavigate();
  return (
    <div className={styles.profile__favorite__item}>
      <img
        className={styles.profile__favorite__item__image}
        src={obj.titleImage!}
        alt={obj.title}
        onClick={() => {
          navigate(NAV_URL.PRODUCT_PAGE + obj.id);
        }}
      />
      <span className={styles.profile__favorite__item__subtitle}>{obj.authors}</span>
      <span
        className={styles.profile__favorite__item__title}
        onClick={() => {
          navigate(NAV_URL.PRODUCT_PAGE + obj.id);
        }}>
        {obj.title}
      </span>
      <span className={styles.profile__favorite__item__price}>{obj.price}, грн </span>
      <button className={`button ${styles.profile__favorite__item__button}`}>Додати у кошик</button>
    </div>
  );
}
