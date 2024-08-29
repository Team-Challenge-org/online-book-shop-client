import styles from "./imagehover.module.scss";

import type { TCatalogItemType } from "types/common";
import type { TFavoriteItems } from "store/favorite/types";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdFavorite } from "react-icons/md";
import { useAppDispatch } from "store/store";
import { MdShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useBooksLogic } from "contexts/BooksContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useModalCart } from "contexts/ModalCartContext";
import { selectOneFavorite } from "store/favorite/selectors";
import {
  selectItemInAuthUserCart,
  selectItemInNotAuthUserCart,
} from "store/cart/selectors";
import { addOrRemoveFavoriteItem } from "store/favorite/favoriteSlice";
import { selectIsAuth } from "store/auth/selectors";

const ImageHover = ({ item }: TCatalogItemType) => {
  const dispatch = useAppDispatch();
  const { updateBookViewAndData } = useBooksLogic();
  const favorite = useSelector(selectOneFavorite(item));
  const notAuthcart = useSelector(selectItemInNotAuthUserCart(item));
  const authCart = selectItemInAuthUserCart(item);
  const [hoverFavorite, setHoverFavorite] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);
  const isAuth = useSelector(selectIsAuth);

  const { onAddOrRemoveCartItem } = useModalCart();

  let shoppingCart;
  if (isAuth) {
    shoppingCart = authCart;
  } else {
    shoppingCart = notAuthcart;
  }

  const favoriteItemsHandler = (obj: TFavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
  };

  return (
    <div className={styles.hover} onClick={() => updateBookViewAndData(item)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <div className={styles.hover__wrapper}>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              favoriteItemsHandler(item);
            }}
            className={styles.hover__button}
          >
            {favorite ? (
              <div
                className={`${styles.hover__button__icon} ${styles.hover__button__black}`}
              >
                <MdFavorite color="#FFFFFF" size="28px" />
              </div>
            ) : (
              <div
                onMouseEnter={() => setHoverFavorite(true)}
                onMouseLeave={() => setHoverFavorite(false)}
                className={`${styles.hover__button__icon} ${
                  hoverFavorite
                    ? styles.hover__button__black
                    : styles.hover__button__green
                }`}
              >
                <MdFavoriteBorder color="#FFFFFF" size="28px" />
              </div>
            )}
          </button>

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onAddOrRemoveCartItem(item);
            }}
            className={styles.hover__button}
          >
            {shoppingCart ? (
              <div
                className={`${styles.hover__button__icon} ${styles.hover__button__black}`}
              >
                <MdShoppingCart color="#FFFFFF" size="28px" />
              </div>
            ) : (
              <div
                onMouseEnter={() => setHoverCart(true)}
                onMouseLeave={() => setHoverCart(false)}
                className={`${styles.hover__button__icon} ${
                  hoverCart
                    ? styles.hover__button__black
                    : styles.hover__button__green
                }`}
              >
                <MdOutlineShoppingCart color="#FFFFFF" size="28px" />
              </div>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageHover;
