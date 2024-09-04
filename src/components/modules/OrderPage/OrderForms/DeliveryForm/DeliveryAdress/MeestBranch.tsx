import React from 'react';
import styles from '../../../orderPage.module.scss';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { errorTextTips } from 'constants/auth';

export default function MeestBranch() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className={styles.order__delivery__block__label}>
      <span className={styles.order__delivery__block__label__title}>Оберіть відділення *</span>

      <div
        className={
          errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block
        }>
        <input
          type='text'
          placeholder='Оберіть відділення'
          {...register('department')}
          className={styles.order__delivery__block__label__block__input}
        />
      </div>

      {/* Display error message if any */}
      {errors?.department && (
        <ErrorMessage message={errors.department?.message as string} errorTips={errorTextTips} />
      )}
    </label>
  );
}
