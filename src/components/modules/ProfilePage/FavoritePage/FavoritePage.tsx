import React from 'react';
import FavoriteItem from './FavoriteItem';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'store/favorite/selectors';
import styles from '../profilePage.module.scss';

export default function FavoritePage() {
  const { items } = useSelector(selectFavorite);
  return (
    <div className={styles.profile__favorite}>
      {items.map((item) => (
        <FavoriteItem obj={item} key={item.id} />
      ))}
    </div>
  );
}
