import type { TBook } from "store/books/types";
import type { TCartItem } from "store/cart/types";
import type { TCatalogItemType } from "types/common";
import type { TFavoriteItems } from "store/favorite/types";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "store/cart/selectors";
import { addOrRemoveCartItem } from "store/cart/cartSlice";
import { selectFavorite } from "store/favorite/selectors";
import { addOrRemoveFavoriteItem } from "store/favorite/favoriteSlice";
import { useAppDispatch } from "store/store";
import ButtonCart from "./ButtonCart";
import ButtonFavorite from "./ButtonFavorite";
import styles from "styles/catalogItem/index.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";
import { setSimilarBooks } from "store/books/booksSlice";

const CatalogItem = ({ item }: TCatalogItemType) => {
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

  const CartItemHandler = (obj: TCartItem) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: TFavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  function updateBookSelection(book: TBook) {
    dispatch(addRecentlyViewedBook(book));
    dispatch(setSimilarBooks(book));
  }
  return (
    <li className={styles.catalog__list} key={item.id}>
      <div
        className={styles.catalog__list__item}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
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
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <div className={styles.catalog__list__item__active__wrapper}>
                <button
                  onClick={() => favoriteItemsHandler(item)}
                  className={styles.catalog__list__item__active__button}
                >
                  <ButtonFavorite isAdded={isAddedToFavorite} />
                </button>
                <button
                  onClick={() => CartItemHandler(item)}
                  className={styles.catalog__list__item__active__button}
                >
                  <ButtonCart isAdded={isAddedToCart} />
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={styles.catalog__list__item__text}>
        <span className={styles.catalog__list__item__text__author}>
          {item.authors}
        </span>
        <Link
          to={`/book/${item.id}`}
          className={styles.catalog__list__item__text__title}
          onClick={() => updateBookSelection(item)}
        >
          {item.title}
        </Link>
        <span className={styles.catalog__list__item__text__price}>
          {item.price} грн.
        </span>
      </div>
    </li>
  );
};

export default CatalogItem;
