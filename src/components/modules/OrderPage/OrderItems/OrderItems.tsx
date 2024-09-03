import styles from "../orderPage.module.scss";

import {
  selectAuthUserCart,
  selectNotAuthUserCart,
} from "store/cart/selectors";
import { OrderItem } from "./OrderItem";
import { useSelector } from "react-redux";
import { selectIsAuth } from "store/auth/selectors";
import { useModalCart } from "contexts/ModalCartContext";
import Spinner from "components/elements/Spinner/Spinner";

export default function OrderItems() {
  const { totalCartPrice } = useModalCart();
  const isAuth = useSelector(selectIsAuth);
  const { cartItems: notAuthUserCart } = useSelector(selectNotAuthUserCart);
  const { cartItems: authUserCart, isLoading } =
    useSelector(selectAuthUserCart);

  return (
    <div className={styles.order__items}>
      <h1 className={styles.order__items__title}>Замовлення</h1>
      {isAuth && isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {(isAuth ? authUserCart : notAuthUserCart)?.map((book) => (
            <OrderItem key={book.id} book={book} />
          ))}
        </ul>
      )}
      <div className={styles.order__items__footer}>
        <h2 className={styles.order__items__footer__text}>Разом</h2>
        <p className={styles.order__items__footer__text}>
          {totalCartPrice.toFixed(2)} грн
        </p>
      </div>
    </div>
  );
}
