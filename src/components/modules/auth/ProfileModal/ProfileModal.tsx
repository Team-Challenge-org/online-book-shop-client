import React from 'react';
import styles from './profileModal.module.scss';
import { MdLogout, MdOutlinePerson } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'store/store';
import { useAuth } from 'contexts/AuthContext';
import { logoutUser } from 'store/auth/asyncActions';

export default function ProfileModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { onCloseRegisterForm } = useAuth();

  return (
    <>
      <div className={styles.profile__block}>
        <div className={styles.profile__block__icon__wrapper}>
          <MdOutlinePerson className={styles.profile__block__icon} />
        </div>
        <span className={styles.profile__block__title}>МІЙ ПРОФІЛЬ</span>
        <button className={styles.profile__block__btnClose} onClick={() => onCloseRegisterForm()}>
          &times;
        </button>
      </div>

      <span className={styles.profile__line} />

      <ul className={styles.profile__block__list}>
        <li
          className={styles.profile__block__list__item}
          onClick={() => {
            navigate('/profile?element=personal');
            onCloseRegisterForm();
          }}>
          <div className={styles.profile__block__list__item__icon__wrapper}>
            <MdOutlinePerson className={styles.profile__block__list__item__icon} />
          </div>
          <span className={styles.profile__block__list__item__title}>Особисті дані</span>
        </li>
        <li
          className={styles.profile__block__list__item}
          onClick={() => {
            navigate('/profile?element=favorites');
            onCloseRegisterForm();
          }}>
          <div className={styles.profile__block__list__item__icon__wrapper}>
            <MdFavoriteBorder className={styles.profile__block__list__item__icon} />
          </div>
          <span className={styles.profile__block__list__item__title}>Список побажань</span>
        </li>
        <li
          className={styles.profile__block__list__item}
          onClick={() => {
            navigate('/profile?element=orders');
            onCloseRegisterForm();
          }}>
          <div className={styles.profile__block__list__item__icon__wrapper}>
            <MdOutlineLocalShipping className={styles.profile__block__list__item__icon} />
          </div>
          <span className={styles.profile__block__list__item__title}>Історія замовлень</span>
        </li>
      </ul>

      <span className={styles.profile__line} />

      <div
        className={styles.profile__block__footer}
        onClick={async () => {
          await dispatch(logoutUser());
          onCloseRegisterForm();
          navigate('/');
        }}>
        <div className={styles.profile__block__list__item__icon__wrapper}>
          <MdLogout />
        </div>
        <span className={styles.profile__block__list__item__title}>Вихід</span>
      </div>

      <span className={styles.profile__line} />
    </>
  );
}
