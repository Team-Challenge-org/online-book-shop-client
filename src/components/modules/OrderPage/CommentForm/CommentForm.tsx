import { useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss';

export default function CommentForm() {
  const { register } = useFormContext();

  return (
    <label>
      <span className={styles.order__subtitle}>Коментар до замовлення</span>

      <input type="text" {...register('comment')} className={styles.order__comment} />
    </label>
  );
}
