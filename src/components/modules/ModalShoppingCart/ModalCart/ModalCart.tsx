import styles from "./modalCart.module.scss";

import {
  selectAuthUserCart,
  selectNotAuthUserCart,
} from "store/cart/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../СartItem/CartItem";
import { useModalCart } from "contexts/ModalCartContext";
import { useOutsideModalClick } from "hooks/useOutsideModalClick";
import Spinner from "components/elements/Spinner/Spinner";
import { selectAuthData } from "store/user/selectors";

export function ModalCart() {
  const { onCloseCartModal, totalCartPrice, cartItemsCount } = useModalCart();
  const { cartItems: notAuthUserCart } = useSelector(selectNotAuthUserCart);
  const { cartItems: authUserCart, isLoading } =
    useSelector(selectAuthUserCart);

  const isAuth = useSelector(selectAuthData);

  const navigate = useNavigate();

  const overlayRef = useOutsideModalClick(onCloseCartModal);

  //remove background scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header_box}>
          <h1 className={styles.title}>кошик</h1>

          <span className={styles.close_icon} onClick={onCloseCartModal}>
            &times;
          </span>
        </div>

        {/* List of Books  */}
        <div className={styles.main_box}>
          {cartItemsCount === 0 ? (
            <p>Ваш кошик порожній.</p>
          ) : (
            <ul>
              {(isAuth ? authUserCart : notAuthUserCart)?.map((book) =>
                isLoading ? <Spinner /> : <CartItem key={book.id} book={book} />
              )}
            </ul>
          )}
        </div>

        {cartItemsCount === 0 ? (
          ""
        ) : (
          <div className={styles.footer_box}>
            <div className={styles.price_box}>
              <h2>Разом</h2>
              <p className={styles.total_price}>
                {totalCartPrice.toFixed(2)} грн
              </p>
            </div>

            <button
              className={styles.submit_btn}
              onClick={() => {
                navigate("/order");
                onCloseCartModal();
              }}
            >
              Оформити замовлення
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
