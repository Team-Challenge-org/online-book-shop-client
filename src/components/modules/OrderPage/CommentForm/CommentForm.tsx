import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { orderContactsSchema, TOrderContactsSchema } from 'validations/orderContactsSchema';
import styles from '../orderPage.module.scss';

export default function CommentForm() {
  const methods = useForm<TOrderContactsSchema>({
    resolver: zodResolver(orderContactsSchema),
  });
  const {register} = useForm()

  return (
    <FormProvider {...methods}>
      <span className={styles.order__subtitle}>Коментар до замовлення</span>

      <input 
          type='text'
          {...register('comment')}
          className={styles.order__comment}
        />

    </FormProvider>
  );
}
