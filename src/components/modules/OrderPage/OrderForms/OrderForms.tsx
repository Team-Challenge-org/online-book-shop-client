import ContactsForm from 'components/modules/OrderPage/OrderForms/ContactsForm/ContactsForm';
import DeliveryForm from 'components/modules/OrderPage/OrderForms/DeliveryForm/DeliveryForm';
import PaymentForm from 'components/modules/OrderPage/OrderForms/PaymentForm/PaymentForm';
import CommentForm from 'components/modules/OrderPage/OrderForms/CommentForm/CommentForm';
import styles from '../orderPage.module.scss';

export default function OrderForms() {
  return (
    <div className={styles.order__forms}>
      <h1 className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h1>
      <ContactsForm />
      <DeliveryForm />
      <PaymentForm />
      <CommentForm />
    </div>
  );
}
