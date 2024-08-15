import { useSelector } from 'react-redux';
import styles from '../orderPage.module.scss';
import { selectCart } from 'store/cart/selectors';
import { useModalCart } from 'contexts/ModalCartContext';
import { OrderItem } from './OrderItem';

export default function OrderItems() {
  const { items: shoppingCart } = useSelector(selectCart);
  const { totalCartPrice } = useModalCart();

  return (
    <div className={styles.order__items}>
      <h1 className={styles.order__items__title}>Замовлення</h1>
      <ul>
        {shoppingCart?.map((book) => (
          <OrderItem key={book.id} book={book} />
        ))}
      </ul>
      <div className={styles.order__items__footer}>
        <h2 className={styles.order__items__footer__text}>Разом</h2>
        <p className={styles.order__items__footer__text}>{totalCartPrice.toFixed(2)} грн</p>
      </div>
    </div>
  );
}
