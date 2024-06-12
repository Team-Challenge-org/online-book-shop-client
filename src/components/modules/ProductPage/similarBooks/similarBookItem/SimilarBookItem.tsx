import styles from "./similarBookItem.module.scss";

import type { TBook } from "store/books/types";

import { useState } from "react";
import { useBooksLogic } from "contexts/BooksContext";
import ImageHover from "components/elements/ImageHover/ImageHover";
import { truncateAuthors, truncateBookTitle } from "utils/truncateString";

export function SimilarBookItem({ book }: { book: TBook }) {
  const { updateBookViewAndData } = useBooksLogic();
  const [showButtons, setShowButtons] = useState(false);

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
          {truncateAuthors(book?.authors as string)}
        </p>

        <h3 data-title={book.title} onClick={() => updateBookViewAndData(book)}>
          {truncateBookTitle(book?.title)}
        </h3>

        <span>{book.price} грн</span>
      </div>
    </li>
  );
}
