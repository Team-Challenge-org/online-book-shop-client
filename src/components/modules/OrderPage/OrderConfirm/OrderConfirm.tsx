import { useModalCart } from 'contexts/ModalCartContext';
import styles from '../orderPage.module.scss';

export default function OrderConfirm() {
  const { totalCartPrice } = useModalCart();

  return (
    <div className={styles.order__confirm}>
      <span>Промокод чи подарунковий сертифікат</span>
      <form>
        <input type="text" />
        <button type="submit">Застосувати</button>
      </form>
      <span className={styles.order__confirm__dash} />
      <div>
        <span>ДО СПЛАТИ</span>
        <span>*без врахування доставки </span>
        <span>{totalCartPrice.toFixed(2)} грн</span>
      </div>
      <span>
        Оформлюючи замовлення, я підтверджую, що я ознайомлений(-а) з Публічною офертою та приймаю
        її
      </span>
      <span className={styles.order__confirm__dash} />
      <label>
        <input type="checkbox" />
      </label>
      <button>Підтвердити замовлення</button>
    </div>
  );
}
