import styles from "./cartItem.module.scss";
import type { TBook } from "store/books/types";

import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

import { useModalCart } from "contexts/modalCartWindow/ModalCartContext";
import { ModalCartBookImageLoader } from "components/assets/skeletonLoader/ModalCartBookImageLoader";

export function CartItem({ book }: { book: TBook }) {
  const { onDecreaseBookCount, onIncreaseBookCount, onRemoveBookFromCart } =
    useModalCart();

  const totalBookPrice = book?.price * book?.quantity;

  return (
    <li className={styles.book_container}>
      <div className={styles.img_box}>
        {book?.titleImage ? (
          <img
            src={book?.titleImage as string}
            alt={book.title}
            className={styles.image}
          />
        ) : (
          <ModalCartBookImageLoader />
        )}
      </div>

      <div className={styles.book_info_box}>
        <div className={styles.text}>
          <p className={styles.book_authors}>{book?.authors}</p>
          <p className={styles.book_title}>{book?.title}</p>
        </div>

        <div className={styles.count_price_box}>
          <div className={styles.count_box}>
            <div
              className={styles.change_count_btn}
              onClick={() => onDecreaseBookCount(book?.id)}
            >
              <MdRemove />
            </div>

            <span className={styles.quantity}>{book?.quantity}</span>

            <div
              className={styles.change_count_btn}
              onClick={() => onIncreaseBookCount(book?.id)}
            >
              <MdAdd />
            </div>
          </div>

          <div className={styles.price}>{totalBookPrice} грн</div>
        </div>

        <span
          className={styles.remove_book_icon}
          onClick={() => onRemoveBookFromCart(book?.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </span>
      </div>
    </li>
  );
}
