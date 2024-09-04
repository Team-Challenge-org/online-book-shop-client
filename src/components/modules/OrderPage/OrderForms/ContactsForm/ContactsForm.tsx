import { TRegisterField } from 'types/auth';
import { OrderField } from '../OrderField/OrderField';
import styles from '../../orderPage.module.scss';
import { useState } from 'react';
import RecipientForm from './RecipientForm';
import { useFormContext } from 'react-hook-form';
import {
  errorEmailTips,
  errorFirstNameTips,
  errorLastNameTips,
  errorPhoneNumberTips,
} from 'constants/auth';

const orderFields: TRegisterField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ваше ім’я *',
    placeholder: 'Введіть ваше ім’я',
    valueName: 'first_name',
    errorTips: errorFirstNameTips,
  },
  {
    id: 2,
    type: 'text',
    label: 'Ваше прізвище *',
    placeholder: 'Введіть ваше прізвище',
    valueName: 'last_name',
    errorTips: errorLastNameTips,
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону *',
    placeholder: '+38',
    valueName: 'phone_number',
    errorTips: errorPhoneNumberTips,
  },
  {
    id: 4,
    type: 'email',
    label: 'Електронна пошта *',
    placeholder: 'Введіть електронну пошту',
    valueName: 'email',
    errorTips: errorEmailTips,
  },
];

export default function ContactsForm() {
  const [isAnotherRecipient, setIsAnotherRecipient] = useState(false);

  const { register } = useFormContext();

  return (
    <>
      <span className={styles.order__subtitle}>Контактні дані</span>

      <div className={styles.order__contacts__block}>
        {orderFields.map((field) => (
          <OrderField key={field.id} field={field} />
        ))}

        <label className={styles.checkbox_container}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={isAnotherRecipient}
            {...register('another_recipient')}
            onChange={() => setIsAnotherRecipient(!isAnotherRecipient)}
          />
          <span>отримувач інша людина</span>
        </label>
      </div>

      {isAnotherRecipient && <RecipientForm />}
    </>
  );
}
