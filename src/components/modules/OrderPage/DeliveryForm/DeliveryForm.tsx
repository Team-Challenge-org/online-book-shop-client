import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import CitySelect from './CitySelect';
import DeliveryType from './DeliveryType';
import DeliveryAddress from './DeliveryAdress/DeliveryAddress';
import styles from '../orderPage.module.scss';

export default function DeliveryForm() {
  return (
    <>
      <span className={styles.order__subtitle}>Доставка</span>

      <div className={styles.order__contacts__block}>
        <CitySelect />
        <DeliveryType />
        <DeliveryAddress />
      </div>
    </>
  );
}
