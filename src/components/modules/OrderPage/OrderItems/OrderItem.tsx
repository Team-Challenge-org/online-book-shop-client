import styles from './orderItem.module.scss';

import type { TBook } from 'store/books/types';

import { MdAdd } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
import { truncateAuthors } from 'utils/truncateString';
import { useModalCart } from 'contexts/ModalCartContext';
import { ModalCartBookImageLoader } from 'components/assets/skeletonLoader/ModalCartBookImageLoader';

export function OrderItem({ book }: { book: TBook }) {
  const { onDecreaseBookCount, onIncreaseBookCount, onRemoveBookFromCart, onUpdateItemQuantity } =
    useModalCart();

  const totalBookPrice = book?.price * book?.quantity;

  return (
    <li className={styles.book_container}>
      <div className={styles.img_box}>
        {book?.titleImage ? (
          <img src={book?.titleImage as string} alt={book.title} className={styles.image} />
        ) : (
          <ModalCartBookImageLoader />
        )}
      </div>

      <div className={styles.book_info_box}>
        <div className={styles.text}>
          <p className={styles.book_authors} data-title={book.authors as string}>
            {truncateAuthors(book?.authors as string)}
          </p>
          <p className={styles.book_title}>{book?.title}</p>
        </div>

        <div className={styles.count_price_box}>
          <div className={styles.count_box}>
            <div className={styles.change_count_btn} onClick={() => onDecreaseBookCount(book?.id)}>
              <MdRemove />
            </div>

            <input
              type='number'
              className={styles.field_quantity}
              maxLength={3}
              value={book?.quantity}
              onChange={(e) => onUpdateItemQuantity(book.id, Number(e.target.value))}
            />

            <div className={styles.change_count_btn} onClick={() => onIncreaseBookCount(book?.id)}>
              <MdAdd />
            </div>
          </div>

          <div className={styles.price}>{totalBookPrice.toFixed(2)} грн</div>
        </div>

        <span className={styles.remove_book_icon} onClick={() => onRemoveBookFromCart(book?.id)}>
          <span className='material-symbols-outlined'>delete</span>
        </span>
      </div>
    </li>
  );
}
