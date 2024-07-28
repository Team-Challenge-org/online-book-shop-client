import ContactsForm from 'components/modules/OrderPage/ContactsForm/ContactsForm';
import styles from '../../components/modules/OrderPage/orderPage.module.scss';
import DeliveryForm from 'components/modules/OrderPage/DeliveryForm/DeliveryForm';
import PaymentForm from 'components/modules/OrderPage/PaymentForm/PaymentForm';
import CommentForm from 'components/modules/OrderPage/CommentForm/CommentForm';
import ConfirmOrder from 'components/modules/OrderPage/ConfirmOrder/ConfirmOrder';
import { useForm } from 'react-hook-form';

export default function OrderPage() {
  
  const methods = useForm();
  
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  function onSubmitData(data: any) {
    console.log(data)
  }

  return (
    <div className={styles.order}>
      <span className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</span>
      <form onSubmit={handleSubmit(onSubmitData)}>
      <ContactsForm />
      <DeliveryForm />
      <PaymentForm />
      <CommentForm />

      <ConfirmOrder />
      </form>
    </div>
  );
}
