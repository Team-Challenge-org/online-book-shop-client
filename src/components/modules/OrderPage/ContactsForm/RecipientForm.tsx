import React from 'react';
import { TRegisterField } from 'types/auth';
import styles from '../orderPage.module.scss';
import { OrderField } from '../OrderField/OrderField';

const orderFields: TRegisterField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ім’я отримувача *',
    placeholder: 'Введіть ім’я отримувача',
    valueName: 'recipient_first_name',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 30 символів.',
    ],
  },
  {
    id: 2,
    type: 'text',
    label: 'Прізвище отримувача *',
    placeholder: 'Введіть прізвище отримувача',
    valueName: 'recipient_last_name',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 50 символів.',
    ],
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону отримувача *',
    placeholder: '+38',
    valueName: 'recipient_phone_number',
    errorTips: [
      'Ви можете використовувати лише арабські цифри та «+».',
      'Довжина мобільного номера має бути 13 символів, включаючи «+».',
    ],
  },
];

export default function RecipientForm() {
  return (
    <div className={styles.order__contacts__block}>
      {orderFields.map((field) => (
        <OrderField key={field.id} field={field} />
      ))}
    </div>
  );
}
