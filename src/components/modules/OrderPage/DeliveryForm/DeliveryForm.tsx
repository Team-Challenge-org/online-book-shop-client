import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';
import CitySelect from './CitySelect';
import DeliveryType from './DeliveryType';
import { useEffect, useState } from 'react';
import DeliveryAddress from './DeliveryAdress/DeliveryAddress';


export default function DeliveryForm() {
  // const [delivery, setDelivery] = useState()

  const methods = useForm<TOrderContactsSchema>({
    resolver: zodResolver(orderContactsSchema),
  });


  // useEffect(() => {
  //   if (getValues('delivery_type')) {
  //     setDelivery(getValues('delivery_type'))
  //   }
  // }, [delivery])

  
  // const test = getValues('delivery_type')
  // console.log(test)


  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <span className={styles.order__subtitle}>Доставка</span>

      <div className={styles.order__contacts__block}>
        <CitySelect />
        <DeliveryType />
        <DeliveryAddress />
        
      </div>
    </FormProvider>
  );
}
