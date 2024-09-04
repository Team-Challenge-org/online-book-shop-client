import React from 'react';
import { TRegisterField } from 'types/auth';
import styles from '../../orderPage.module.scss';
import { OrderField } from '../OrderField/OrderField';
import { errorFirstNameTips, errorLastNameTips, errorPhoneNumberTips } from 'constants/auth';

const orderFields: TRegisterField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ім’я отримувача *',
    placeholder: 'Введіть ім’я отримувача',
    valueName: 'recipient_first_name',
    errorTips: errorFirstNameTips,
  },
  {
    id: 2,
    type: 'text',
    label: 'Прізвище отримувача *',
    placeholder: 'Введіть прізвище отримувача',
    valueName: 'recipient_last_name',
    errorTips: errorLastNameTips,
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону отримувача *',
    placeholder: '+38',
    valueName: 'recipient_phone_number',
    errorTips: errorPhoneNumberTips,
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
