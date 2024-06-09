import styles from "./recentlyViewedBooks.module.scss";

import {
  handleTruncateAuthors,
  handleTruncateBookTitle,
} from "utils/truncateString";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TBook } from "store/books/types";
import { useNavigate } from "react-router-dom";
import { setSimilarBooks } from "store/books/booksSlice";
import ImageHover from "components/elements/ImageHover/ImageHover";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";

const RecentlyViewedBooksItem = ({ book }: { book: TBook }) => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function updateBookViewAndData(book: TBook) {
    navigate(`/book/${book.id}`);
    dispatch(setSimilarBooks(book));
    dispatch(addRecentlyViewedBook(book));
  }

  return (
    <li key={book.id} className={styles.embla__slide}>
      <div
        className={styles.book_item}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <img
          src={book?.titleImage as string}
          alt={"image of: " + book.title}
          className={styles.book_image}
        />
        {showButtons ? <ImageHover item={book} /> : ""}
      </div>
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
};

export default RecentlyViewedBooksItem;
