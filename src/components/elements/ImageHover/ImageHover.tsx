import React, { useEffect, useState } from 'react';
import styles from './imagehover.module.scss';
import { useAppDispatch } from 'store/store';
import { addOrRemoveCartItem } from 'store/cart/cartSlice';
import { addOrRemoveFavoriteItem } from 'store/favorite/favoriteSlice';
import { TCatalogItemType } from 'types/common';
import { TFavoriteItems } from 'store/favorite/types';
import { TCartItem } from 'store/cart/types';
import ButtonFavorite from 'components/modules/CatalogList/ButtonFavorite';
import ButtonCart from 'components/modules/CatalogList/ButtonCart';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';
import { selectFavorite } from 'store/favorite/selectors';

const ImageHover = ({ item }: TCatalogItemType) => {
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const { items: CartItem } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);

  useEffect(() => {
    if (CartItem.length > 0) {
      let checkCart = CartItem.find((obj) => obj.id === item.id);
      if (checkCart) {
        setIsAddedToCart(true);
      }
    }

    if (favoriteItems.length > 0) {
      let checkFavorite = favoriteItems.find((obj) => obj.id === item.id);
      if (checkFavorite) {
        setIsAddedToFavorite(true);
      }
    }
  }, [CartItem, favoriteItems, item, dispatch]);
  const CartItemHandler = (obj: TCartItem) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: TFavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <div className={styles.hover}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1 }}>
        <div className={styles.hover__wrapper}>
          <button onClick={() => favoriteItemsHandler(item)} className={styles.hover__button}>
            <ButtonFavorite isAdded={isAddedToFavorite} />
          </button>
          <button onClick={() => CartItemHandler(item)} className={styles.hover__button}>
            <ButtonCart isAdded={isAddedToCart} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageHover;
