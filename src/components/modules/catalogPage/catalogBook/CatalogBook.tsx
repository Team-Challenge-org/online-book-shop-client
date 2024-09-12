import styles from "./CatalogBook.module.scss";

import type { TCatalogBook } from "store/catalog/types";

import { truncateAuthors, truncateBookTitle } from "utils/truncateString";

type TCatalogBookProps = {
  book: TCatalogBook;
};

export function CatalogBook({ book }: TCatalogBookProps) {
  return (
    <li className={styles.bookCard}>
      <img
        className={styles.bookImage}
        src={book.titleImage}
        alt={book.title}
      />

      <p className={styles.bookAuthor}>
        {truncateAuthors(book.authors as string)}
      </p>

      <h3 className={styles.bookTitle}>{truncateBookTitle(book.title)}</h3>

      <p className={styles.bookPrice}>{book.price} грн</p>
    </li>
  );
}
