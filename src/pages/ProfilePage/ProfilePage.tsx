import FavoritesPage from 'components/modules/ProfilePage/FavoritesPage/FavoritesPage';
import OrdersPage from 'components/modules/ProfilePage/OrdersPage/OrdersPage';
import PersonalPage from 'components/modules/ProfilePage/PersonalPage/PersonalPage';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from '../../components/modules/ProfilePage/profilePage.module.scss';

export default function ProfilePage() {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.profile}>
      <h1 className={styles.profile__title}>МІЙ ПРОФІЛЬ</h1>
      <ul className={styles.profile__list}>
        <Link to='/profile?element=personal' className={styles.profile__list__item__link}>
          <li
            className={`${styles.profile__list__item} ${
              searchParams.get('element') === 'personal' ? styles.profile__list__item_active : ''
            } `}>
            ОСОБИСТІ ДАНІ
          </li>
        </Link>
        <Link to='/profile?element=favorites' className={styles.profile__list__item__link}>
          <li
            className={`${styles.profile__list__item} ${
              searchParams.get('element') === 'favorites' ? styles.profile__list__item_active : ''
            } `}>
            СПИСОК ПОБАЖАНЬ
          </li>
        </Link>
        <Link to='/profile?element=orders' className={styles.profile__list__item__link}>
          <li
            className={`${styles.profile__list__item} ${
              searchParams.get('element') === 'orders' ? styles.profile__list__item_active : ''
            } `}>
            ІСТОРІЯ ЗАМОВЛЕНЬ
          </li>
        </Link>
      </ul>
      {searchParams.get('element') === 'personal' ? <PersonalPage /> : ''}
      {searchParams.get('element') === 'favorites' ? <FavoritesPage /> : ''}
      {searchParams.get('element') === 'orders' ? <OrdersPage /> : ''}
    </div>
  );
}
