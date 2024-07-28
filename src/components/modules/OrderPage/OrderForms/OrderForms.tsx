import ContactsForm from 'components/modules/OrderPage/OrderForms/ContactsForm/ContactsForm';
import DeliveryForm from 'components/modules/OrderPage/OrderForms/DeliveryForm/DeliveryForm';
import PaymentForm from 'components/modules/OrderPage/OrderForms/PaymentForm/PaymentForm';
import CommentForm from 'components/modules/OrderPage/OrderForms/CommentForm/CommentForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';

export default function OrderForms() {
  const defaultValues = {
    payment: 'online',
    city: '',
    delivery_type: '1',
    email: '',
    first_name: '',
    last_name: '',
    np_branch: '',
    phone_number: '',
    comment: '',
  };

  const methods = useForm<TOrderContactsSchema>({ defaultValues });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmitData: SubmitHandler<any> = (data: TOrderContactsSchema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.order__forms}>
        <h1 className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h1>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <ContactsForm />
          <DeliveryForm />
          <PaymentForm />
          <CommentForm />

          <button type="submit">Оформити</button>
        </form>
      </div>
    </FormProvider>
  );
}
