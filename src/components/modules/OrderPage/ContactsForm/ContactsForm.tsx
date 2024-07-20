import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { TRegisterField } from "types/auth";
import { orderContactsSchema, TOrderContactsSchema } from "validations/orderContactsSchema"
import { OrderField } from "../OrderField/OrderField";
import styles from '../orderPage.module.scss'

const orderFields: TRegisterField[] = [
    {
      id: 1,
      type: 'text',
      label: 'Ваше ім’я *',
      placeholder: 'Введіть ваше ім’я',
      valueName: 'first_name',
      errorTips: [
        'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
        'Ви можете використовувати великі та малі літери.',
        'Довжина імені має бути від 2 до 30 символів.',
      ],
    },
    {
      id: 2,
      type: 'text',
      label: 'Ваше прізвище *',
      placeholder: 'Введіть ваше прізвище',
      valueName: 'last_name',
      errorTips: [
        'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
        'Ви можете використовувати великі та малі літери.',
        'Довжина імені має бути від 2 до 50 символів.',
      ],
    },
    {
      id: 3,
      type: 'number',
      label: 'Номер телефону *',
      placeholder: '+38',
      valueName: 'phone_number',
      errorTips: [
        'Ви можете використовувати лише арабські цифри та «+».',
        'Довжина мобільного номера має бути 13 символів, включаючи «+».',
      ],
    },
    {
      id: 4,
      type: 'email',
      label: 'Електронна пошта *',
      placeholder: 'Введіть електронну пошту',
      valueName: 'email',
      errorTips: [
        "Ви можете використовувати лише арабські цифри, латиницю та наступні символи ~ ! $ % ^ & * _ = + } { ' ? - @.",
        'Ви можете використовувати великі та малі літери.',
        'Пошта має містити “@”.',
        "Пошта повинна мати будь-який діючий домейн окрім “mail.ru”, “yandex.ru” та інших доменів, пов'язаних з росією.",
      ],
    }
  ];

export default function ContactsForm() {

    const methods = useForm<TOrderContactsSchema>({
        resolver: zodResolver(orderContactsSchema)
    })

    const {
        handleSubmit,
        formState: { isValid },
      } = methods;

  return (
    <FormProvider {...methods}>
        <span className={styles.order__subtitle}>Контактні дані</span>

        <div className={styles.order__contacts__block}>
        {orderFields.map((field) => (
          <OrderField key={field.id} field={field} />
        ))}

        <label className={styles.checkbox_container}>
          <input
            type="checkbox"
            className={styles.checkbox}
          />
          <span>отримувач інша людина</span>
        </label>
        
        </div>
    </FormProvider>
  )
}