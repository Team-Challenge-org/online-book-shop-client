import { setSimilarBooks } from "store/books/booksSlice";
import styles from "./similarBookItem.module.scss";

import type { TBook } from "store/books/types";

import {
  handleTruncateAuthors,
  handleTruncateBookTitle,
} from "utils/truncateString";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NAV_URL } from "constants/global";

export function SimilarBookItem({ book }: { book: TBook }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function updateBookViewAndData(book: TBook) {
    navigate(NAV_URL.PRODUCT_PAGE + book.id);
    dispatch(setSimilarBooks(book));
    dispatch(addRecentlyViewedBook(book));
  }

  return (
    <li key={book.id} className={styles.embla__slide}>
      <img
        src={book?.titleImage as string}
        alt={"image of: " + book.title}
        className={styles.book_image}
      />

      <div className={styles.text_info_box}>
        <p data-title={book.authors as string}>
          {handleTruncateAuthors(book?.authors as string)}
        </p>

        <h3 data-title={book.title} onClick={() => updateBookViewAndData(book)}>
          {handleTruncateBookTitle(book?.title)}
        </h3>

        <span>{book.price} грн</span>
      </div>
    </li>
  );
}
