import { useFormContext } from 'react-hook-form';
import styles from '../../orderPage.module.scss';

export default function CommentForm() {
  const { register } = useFormContext();

  return (
    <label>
      <span className={styles.order__comment__subtitle}>Коментар до замовлення</span>

      <textarea {...register('comment')} className={styles.order__comment__input} />
    </label>
  );
}
