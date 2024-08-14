import { useModalCart } from 'contexts/ModalCartContext';
import styles from '../orderPage.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectDeliveryData } from 'store/delivery/selectors';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';

export default function OrderConfirm() {
  const { totalCartPrice } = useModalCart();
  const { formError } = useSelector(selectDeliveryData);
  const methods = useForm();

  const { register } = methods;

  return (
    <div className={styles.order__confirm}>
      <span className={styles.order__confirm__promo}>Промокод чи подарунковий сертифікат</span>
      <form className={styles.order__confirm__promo_form}>
        <input
          type='text'
          placeholder='Введіть промокод чи сертифікат'
          className={styles.order__confirm__promo_form__input}
        />
        <button type='submit' className={styles.order__confirm__promo_form__button}>
          Застосувати
        </button>
      </form>
      <span className={styles.order__confirm__dash} />

      <div className={styles.order__confirm__total}>
        <span>ДО СПЛАТИ</span>
        <span>{totalCartPrice.toFixed(2)} грн</span>
      </div>
      <span className={styles.order__confirm__note}>*без врахування доставки </span>

      <span className={styles.order__confirm__dash} />
      <p className={styles.order__confirm__offer}>
        Оформлюючи замовлення, я підтверджую, що я ознайомлений(-а) з{' '}
        <Link to='/offer' className={styles.order__confirm__offer__green}>
          Публічною офертою
        </Link>{' '}
        та приймаю її
      </p>
      <span className={styles.order__confirm__dash} />

      <label className={styles.order__confirm__call}>
        <input type='checkbox' {...register('call')} {...register('call')} />
        <span className={styles.order__confirm__call__text}>Передзвоніть мені</span>
      </label>

      <button className={`${styles.order__confirm__button} button`} type='submit' form='orderForm'>
        Підтвердити замовлення
      </button>
      {formError && (
        <ErrorMessage
          message={'Будь ласка, перевірте правильність заповнення необхідних полів' as string}
        />
      )}
    </div>
  );
}
