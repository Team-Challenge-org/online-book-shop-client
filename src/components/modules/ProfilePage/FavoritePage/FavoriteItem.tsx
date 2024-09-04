import React from 'react';
import styles from '../profilePage.module.scss';
import { TFavoriteItem } from 'store/favorite/types';
import { useNavigate } from 'react-router-dom';
import { NAV_URL } from 'constants/global';
import { MdDeleteOutline } from 'react-icons/md';
import { useAppDispatch } from 'store/store';
import { addOrRemoveFavoriteAsync } from 'store/favorite/asyncActions';
import { useModalCart } from 'contexts/ModalCartContext';

export default function FavoriteItem({ obj }: { obj: TFavoriteItem }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { onAddBookToCart } = useModalCart();

  return (
    <div className={styles.profile__favorite__item}>
      <div
        className={styles.profile__favorite__item__icon__wrapper}
        onClick={() => dispatch(addOrRemoveFavoriteAsync(obj))}>
        <MdDeleteOutline size={24} className={styles.profile__favorite__item__icon} />
      </div>
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
      <button
        className={`button ${styles.profile__favorite__item__button}`}
        onClick={() => onAddBookToCart(obj)}>
        Додати у кошик
      </button>
    </div>
  );
}
