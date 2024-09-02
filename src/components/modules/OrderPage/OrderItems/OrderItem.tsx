import styles from "./orderItem.module.scss";

import type { TCartItem } from "store/cart/types";

import { useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { truncateAuthors } from "utils/truncateString";
import { useModalCart } from "contexts/ModalCartContext";
import { ModalCartBookImageLoader } from "components/assets/skeletonLoader/ModalCartBookImageLoader";
import { useChangeBookQuantity } from "hooks/useChangeBookQuantity";

export function OrderItem({ book }: { book: TCartItem }) {
  const { onRemoveBookFromCart, onUpdateItemQuantity } = useModalCart();
  const {
    handleInput,
    itemQuantity,
    totalBookPrice,
    setItemQuantity,
    handleChangeQuantity,
    debouncedItemQuantity,
    handleIncreaseItemQuantity,
    handleDecreaseItemQuantity,
  } = useChangeBookQuantity(book);

  useEffect(() => {
    if (debouncedItemQuantity !== book?.quantity) {
      onUpdateItemQuantity(book?.id, debouncedItemQuantity);
    }
  }, [debouncedItemQuantity]);

  useEffect(() => {
    setItemQuantity(book.quantity);
  }, [book.quantity]);

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
          <p
            className={styles.book_authors}
            data-title={book.authors as string}
          >
            {truncateAuthors(book?.authors as string)}
          </p>
          <p className={styles.book_title}>{book?.title}</p>
        </div>

        <div className={styles.count_price_box}>
          <div className={styles.count_box}>
            <div
              className={styles.change_count_btn}
              onClick={handleDecreaseItemQuantity}
            >
              <MdRemove />
            </div>

            <input
              type="number"
              className={styles.field_quantity}
              maxLength={3}
              value={itemQuantity}
              onInput={handleInput}
              onChange={handleChangeQuantity}
            />

            <div
              className={styles.change_count_btn}
              onClick={handleIncreaseItemQuantity}
            >
              <MdAdd />
            </div>
          </div>

          <div className={styles.price}>{totalBookPrice.toFixed(2)} грн</div>
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
