import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';

export default function PaymentForm() {
  const methods = useForm<TOrderContactsSchema>({
    resolver: zodResolver(orderContactsSchema),
  });
  return (
    <FormProvider {...methods}>
      <span className={styles.order__subtitle}>Оплата</span>
    </FormProvider>
  );
}
