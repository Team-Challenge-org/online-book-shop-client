import styles from "styles/catalogList/index.module.scss";

import type { TCatalogItemType } from "types/common";

import { useState } from "react";
import { NAV_URL } from "constants/global";
import { useAppDispatch } from "store/store";
import { Link, useNavigate } from "react-router-dom";
import { setSimilarBooks } from "store/books/booksSlice";
import ImageHover from "components/elements/ImageHover/ImageHover";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";

const CatalogItem = ({ item }: TCatalogItemType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showButtons, setShowButtons] = useState(false);

  return (
    <li className={styles.catalog__list} key={item.id}>
      <div
        className={styles.catalog__list__item}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
        onClick={() => navigate(NAV_URL.PRODUCT_PAGE + item.id)}
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
