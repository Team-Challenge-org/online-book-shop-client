import styles from "./cartItem.module.scss";

import type { TCartItem } from "store/cart/types";

import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { useDebounce } from "hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { truncateAuthors } from "utils/truncateString";
import { useModalCart } from "contexts/ModalCartContext";
import { ModalCartBookImageLoader } from "components/assets/skeletonLoader/ModalCartBookImageLoader";

export function CartItem({ book }: { book: TCartItem }) {
  const [itemQuantity, setItemQuantity] = useState(book.quantity);

  const { onRemoveBookFromCart, onUpdateItemQuantity } = useModalCart();

  const totalBookPrice = book?.price * book?.quantity;

  const debouncedItemQuantity = useDebounce(itemQuantity, 1000);

  function handleChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (Number(value) === 0) return setItemQuantity(1);
    setItemQuantity(Number(e.target.value));
  }

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    input.value = input.value.replace(/^0+(?=\d)/, ""); // Удаление ведущих нулей
  }

  function handleIncreaseItemQuantity() {
    setItemQuantity((prev) => prev + 1);
  }

  function handleDecreaseItemQuantity() {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  }

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

          <span className={styles.book_price}>{book.price} грн</span>
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
              min="1"
              value={itemQuantity}
              onChange={handleChangeQuantity}
              onInput={handleInput}
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
