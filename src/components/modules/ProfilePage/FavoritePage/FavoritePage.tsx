import React from 'react';
import FavoriteItem from './FavoriteItem';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'store/favorite/selectors';
import styles from '../profilePage.module.scss';
import Spinner from 'components/elements/Spinner/Spinner';

export default function FavoritePage() {
  const { items, loading } = useSelector(selectFavorite);
  return (
    <div className={styles.profile__favorite}>
      {loading ? <Spinner /> : items.map((item) => <FavoriteItem obj={item} key={item.id} />)}
    </div>
  );
}
