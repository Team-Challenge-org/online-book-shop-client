import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';

export default function PaymentForm() {
  //const {
  //  register,
  //  formState: { errors },
  //} = useFormContext();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      payment: '',
    },
  });

  const methods = useForm<TOrderContactsSchema>({
    resolver: zodResolver(orderContactsSchema),
  });
  return (
    <FormProvider {...methods}>
      <span className={styles.order__subtitle}>Оплата</span>

      {/*<Controller
        name="payment"
        control={control}
        defaultValue={'Оплата карткою Online'}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="radio"
              value={'Оплата карткою Online'}
              name="online"
              id="payment"
            />
            <input
              {...field}
              type="radio"
              value={'Готівкою або карткою: при отриманні'}
              name="cash"
              id="payment"
            />
          </>
        )}
      />*/}

      {/*<Controller
        name="payment"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="radio"
            value={'Готівкою або карткою: при отриманні'}
            name="cash"
            id="payment"
          />
        )}
      />*/}

      <label id="field-online">
        <input id="field-online" {...register('payment')} type="radio" value="online" checked />
        Оплата карткою Online
      </label>

      <label id="field-cash">
        <input id="field-cash" {...register('payment')} type="radio" value="cash" />
        Готівкою або карткою: при отриманні
      </label>
    </FormProvider>
  );
}
