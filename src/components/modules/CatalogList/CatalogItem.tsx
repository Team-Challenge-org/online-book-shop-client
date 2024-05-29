import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';
import { addOrRemoveCartItem } from 'store/cart/slice';
import { CartItem } from 'store/cart/types';
import { selectFavorite } from 'store/favorite/selectors';
import { addOrRemoveFavoriteItem } from 'store/favorite/slice';
import { FavoriteItems } from 'store/favorite/types';
import { useAppDispatch } from 'store/store';
import { CatalogItemType } from 'types/commont';
import ButtonCart from './ButtonCart';
import ButtonFavorite from './ButtonFavorite';
import styles from 'styles/catalogItem/index.module.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CatalogItem = ({ item }: CatalogItemType) => {
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
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

  const CartItemHandler = (obj: CartItem) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: FavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <li className={styles.catalog__list} key={item.id}>
      <div
        className={styles.catalog__list__item}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}>
        <img
          src={item.titleImage!}
          alt={item.title}
          className={styles.catalog__list__item__image}
        />
        {showButtons ? (
          <div className={styles.catalog__list__item__active}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1 }}>
              <div className={styles.catalog__list__item__active__wrapper}>
                <button
                  onClick={() => favoriteItemsHandler(item)}
                  className={styles.catalog__list__item__active__button}>
                  <ButtonFavorite isAdded={isAddedToFavorite} />
                </button>
                <button
                  onClick={() => CartItemHandler(item)}
                  className={styles.catalog__list__item__active__button}>
                  <ButtonCart isAdded={isAddedToCart} />
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className={styles.catalog__list__item__text}>
        <span className={styles.catalog__list__item__text__author}>{item.authors}</span>
        <Link to={`/book/${item.id}`} className={styles.catalog__list__item__text__title}>
          {item.title}
        </Link>
        <span className={styles.catalog__list__item__text__price}>{item.price} грн.</span>
      </div>
    </li>
  );
};

export default CatalogItem;
