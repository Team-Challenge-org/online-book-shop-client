import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import { OrderField } from '../OrderField/OrderField';
import styles from '../orderPage.module.scss';
import { TDeliveryType } from 'types/common';
import CitySelect from './CitySelect';

const orderFields: TDeliveryType[] = [
  {
    id: 1,
    type: 'text',
    label: 'Місто *',
    placeholder: 'Введіть назву міста',
    valueName: 'city',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 30 символів.',
    ],
  },
  {
    id: 2,
    type: 'text',
    label: 'Спосіб доставки *',
    placeholder: 'Оберіть спосіб доставки',
    valueName: 'delivery_type',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 50 символів.',
    ],
  },
  {
    id: 3,
    type: 'text',
    label: 'Оберіть відділення/поштомат *',
    placeholder: 'Оберіть відділення/поштомат',
    valueName: 'department',
    errorTips: [
      'Ви можете використовувати лише арабські цифри та «+».',
      'Довжина мобільного номера має бути 13 символів, включаючи «+».',
    ],
  },
];

export default function DeliveryForm() {
  const methods = useForm<TOrderContactsSchema>({
    resolver: zodResolver(orderContactsSchema),
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <span className={styles.order__subtitle}>Контактні дані</span>

      <div className={styles.order__contacts__block}>
        <CitySelect />
      </div>
    </FormProvider>
  );
}
