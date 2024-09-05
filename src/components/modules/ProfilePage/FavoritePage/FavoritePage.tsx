import React, { useEffect } from 'react';
import FavoriteItem from './FavoriteItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'store/favorite/selectors';
import styles from '../profilePage.module.scss';
import Spinner from 'components/elements/Spinner/Spinner';
import { getFavorites } from 'store/favorite/asyncActions';
import { AppDispatch } from 'store/store';

export default function FavoritePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className={`${loading ? styles.profile__favorite_spinner : styles.profile__favorite}`}>
      {loading ? <Spinner /> : items.map((item) => <FavoriteItem obj={item} key={item.id} />)}
    </div>
  );
}
