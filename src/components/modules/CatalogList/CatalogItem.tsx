import type { TCatalogItemType } from "types/common";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { setSimilarBooks } from "store/books/booksSlice";
import ImageHover from "components/elements/ImageHover/ImageHover";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";

import styles from "styles/catalogList/index.module.scss";

const CatalogItem = ({ item }: TCatalogItemType) => {
  const dispatch = useAppDispatch();
  const [showButtons, setShowButtons] = useState(false);

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
        {showButtons ? <ImageHover item={item} /> : ""}
      </div>

      <div className={styles.catalog__list__item__text}>
        <span className={styles.catalog__list__item__text__author}>
          {item.authors}
        </span>
        <Link
          to={`/book/${item.id}`}
          className={styles.catalog__list__item__text__title}
          onClick={() => {
            dispatch(addRecentlyViewedBook(item));
            dispatch(setSimilarBooks(item));
          }}
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
