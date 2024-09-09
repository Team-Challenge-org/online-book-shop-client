import { TRegisterField } from 'types/auth';
import { OrderField } from '../OrderField/OrderField';
import styles from '../../orderPage.module.scss';
import RecipientForm from './RecipientForm';
import { Controller, useFormContext } from 'react-hook-form';
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
  const { control, watch } = useFormContext();

  const watchRecipient = watch('another_recipient');

  return (
    <>
      <span className={styles.order__subtitle}>Контактні дані</span>

      <div className={styles.order__contacts__block}>
        {orderFields.map((field) => (
          <OrderField key={field.id} field={field} />
        ))}

        <label className={styles.checkbox_container}>
          <Controller
            name='another_recipient'
            control={control}
            defaultValue={false}
            render={({ field: { value, ...field } }) => (
              <input type='checkbox' className={styles.checkbox} checked={!!value} {...field} />
            )}
          />

          <span>отримувач інша людина</span>
        </label>
      </div>

      {watchRecipient && <RecipientForm />}
    </>
  );
}
