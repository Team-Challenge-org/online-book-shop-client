import ContactsForm from 'components/modules/OrderPage/ContactsForm/ContactsForm';
import styles from '../../components/modules/OrderPage/orderPage.module.scss';
import DeliveryForm from 'components/modules/OrderPage/DeliveryForm/DeliveryForm';
import PaymentForm from 'components/modules/OrderPage/PaymentForm/PaymentForm';
import CommentForm from 'components/modules/OrderPage/CommentForm/CommentForm';
import ConfirmOrder from 'components/modules/OrderPage/ConfirmOrder/ConfirmOrder';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TOrderContactsSchema } from 'validations/orderContactsSchema';

export default function OrderPage() {
  const defaultValues = {
    payment: 'online',
    city: '',
    delivery_type: '',
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
      <div className={styles.order}>
        <span className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</span>

        <form onSubmit={handleSubmit(onSubmitData)}>
          <ContactsForm />
          <DeliveryForm />
          <PaymentForm />
          <CommentForm />

          <button type="submit">Оформити</button>
        </form>

        {/*<ConfirmOrder />*/}
      </div>
    </FormProvider>
  );
}
