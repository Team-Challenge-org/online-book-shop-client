import styles from "./imagehover.module.scss";

import type { TBook } from "store/books/types";
import type { TCatalogItemType } from "types/common";
import type { TFavoriteItems } from "store/favorite/types";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { selectCart } from "store/cart/selectors";
import React, { useEffect, useState } from "react";
import { useBooksLogic } from "contexts/BooksContext";
import { selectFavorite } from "store/favorite/selectors";
import { addOrRemoveCartItem } from "store/cart/cartSlice";
import { ButtonCart } from "components/modules/CatalogList/ButtonCart";
import { addOrRemoveFavoriteItem } from "store/favorite/favoriteSlice";
import { ButtonFavorite } from "components/modules/CatalogList/ButtonFavorite";

const ImageHover = ({ item }: TCatalogItemType) => {
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const { items: CartItem } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);
  const { updateBookViewAndData } = useBooksLogic();

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

  const CartItemHandler = (obj: TBook) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: TFavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <div className={styles.hover} onClick={() => updateBookViewAndData(item)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className={styles.hover__wrapper}>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              favoriteItemsHandler(item);
            }}
            className={styles.hover__button}
          >
            <ButtonFavorite isAdded={isAddedToFavorite} />
          </button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              CartItemHandler(item);
            }}
            className={styles.hover__button}
          >
            <ButtonCart isAdded={isAddedToCart} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageHover;
