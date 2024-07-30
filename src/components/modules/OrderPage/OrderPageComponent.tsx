import OrderForms from 'components/modules/OrderPage/OrderForms/OrderForms';
import styles from './orderPage.module.scss';
import OrderItems from 'components/modules/OrderPage/OrderItems/OrderItems';
import OrderConfirm from 'components/modules/OrderPage/OrderConfirm/OrderConfirm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TOrderSchema } from 'validations/orderSchema';

export default function OrderPageComponent() {
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
    call: false,
  };

  const methods = useForm<TOrderSchema>({ defaultValues });

  const { handleSubmit } = methods;

  const onSubmitData: SubmitHandler<any> = (data: TOrderSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)} id="orderForm" className={styles.order__block}>
      <FormProvider {...methods}>
        <OrderForms />

        <div>
          <OrderItems />
          <OrderConfirm />
        </div>
      </FormProvider>
    </form>
  );
}
