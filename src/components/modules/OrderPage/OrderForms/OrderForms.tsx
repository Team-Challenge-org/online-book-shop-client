import ContactsForm from 'components/modules/OrderPage/OrderForms/ContactsForm/ContactsForm';
import DeliveryForm from 'components/modules/OrderPage/OrderForms/DeliveryForm/DeliveryForm';
import PaymentForm from 'components/modules/OrderPage/OrderForms/PaymentForm/PaymentForm';
import CommentForm from 'components/modules/OrderPage/OrderForms/CommentForm/CommentForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { orderSchema, TOrderSchema } from 'validations/orderSchema';
import styles from '../orderPage.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { setFormError } from 'store/delivery/deliverySlice';
import { useAppDispatch } from 'store/store';
import { useNavigate } from 'react-router-dom';

export default function OrderForms() {
  const methods = useForm<TOrderSchema>({
    resolver: zodResolver(orderSchema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit } = methods;

  const onSubmitData: SubmitHandler<TOrderSchema> = (data: TOrderSchema) => {
    console.log(data);
    dispatch(setFormError(false));
    navigate('/payment');
  };

  const onErrorMessage = () => {
    dispatch(setFormError(true));
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.order__forms}>
        <h1 className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h1>
        <form onSubmit={handleSubmit(onSubmitData, onErrorMessage)} id='orderForm'>
          <ContactsForm />
          <DeliveryForm />
          <PaymentForm />
          <CommentForm />
        </form>
      </div>
    </FormProvider>
  );
}
