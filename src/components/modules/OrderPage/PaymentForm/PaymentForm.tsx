import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

export default function PaymentForm() {
  const [active, setActive] = useState('online');

  //const { control } = useForm({
  //  defaultValues: {
  //    payment: 'online',
  //  },
  //});

  const { control } = useFormContext();

  //const methods = useForm<TOrderContactsSchema>({
  //  resolver: zodResolver(orderContactsSchema),
  //});
  return (
    <>
      <span className={styles.order__subtitle}>Оплата</span>

      <label htmlFor="online" className={styles.order__payment__label}>
        {active === 'online' ? (
          <MdOutlineRadioButtonChecked height="24px" width="24px" color="#196C67" />
        ) : (
          <MdOutlineRadioButtonUnchecked height="24px" width="24px" color="#959595" />
        )}
        <span className={styles.order__payment__label__text}>Оплата карткою Online</span>
      </label>
      <Controller
        name="payment"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="radio"
            value={'online'}
            name="online"
            id="online"
            className={styles.order__payment__label__input}
            onClick={() => setActive('online')}
          />
        )}
      />

      <label htmlFor="cash" className={styles.order__payment__label}>
        {active === 'cash' ? (
          <MdOutlineRadioButtonChecked height="24px" width="24px" color="#196C67" />
        ) : (
          <MdOutlineRadioButtonUnchecked height="24px" width="24px" color="#959595" />
        )}
        <span className={styles.order__payment__label__text}>
          Готівкою або карткою: при отриманні
        </span>
      </label>
      <Controller
        name="payment"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="radio"
            value={'cash'}
            name="cash"
            id="cash"
            className={styles.order__payment__label__input}
            onClick={() => setActive('cash')}
          />
        )}
      />
    </>
  );
}
