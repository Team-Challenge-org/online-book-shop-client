import React, { useState } from 'react';
import ImageHover from 'components/elements/ImageHover/ImageHover';
import { handleTruncateAuthors, handleTruncateBookTitle } from 'utils/truncateString';
import { TBook } from 'store/books/types';
import styles from './recentlyViewedBooks.module.scss';
import { useNavigate } from 'react-router-dom';

const RecentlyViewedBooksItem = ({ book }: { book: TBook }) => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  return (
    <li key={book.id} className={styles.embla__slide}>
      <div
        className={styles.book_item}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}>
        <img
          src={book?.titleImage as string}
          alt={'image of: ' + book.title}
          className={styles.book_image}
        />
        {showButtons ? <ImageHover item={book} /> : ''}
      </div>
      <div className={styles.text_info_box}>
        <p data-title={book.authors as string}>{handleTruncateAuthors(book?.authors as string)}</p>

        <h3 data-title={book.title} onClick={() => navigate(`/book/${book.id}`)}>
          {handleTruncateBookTitle(book?.title)}
        </h3>

        <span>{book.price} грн</span>
      </div>
    </li>
  );
};

export default RecentlyViewedBooksItem;
