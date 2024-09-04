import { useFormContext } from 'react-hook-form';
import styles from '../../orderPage.module.scss';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { errorTextTips } from 'constants/auth';

export default function CommentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <span className={styles.order__comment__subtitle}>Коментар до замовлення</span>

      <textarea {...register('comment')} className={styles.order__comment__input} />
      {errors?.comment && (
        <ErrorMessage message={errors.comment?.message as string} errorTips={errorTextTips} />
      )}
    </label>
  );
}
