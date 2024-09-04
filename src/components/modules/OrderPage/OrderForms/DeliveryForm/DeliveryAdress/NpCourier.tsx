import React from 'react';
import styles from '../../../orderPage.module.scss';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { errorTextTips } from 'constants/auth';

export default function NpCourier() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Оберіть вулицю *</span>
        <div
          className={
            errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block
          }>
          <input
            type='text'
            placeholder='Оберіть назву вулиці'
            {...register('np_street')}
            className={styles.order__delivery__block__label__block__input}
          />
        </div>
        {/* Display error message if any */}
        {errors?.np_street && (
          <ErrorMessage message={errors.np_street?.message as string} errorTips={errorTextTips} />
        )}
      </label>

      <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Будинок *</span>

        <div
          className={
            errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block
          }>
          <input
            type='text'
            placeholder='Enter text'
            {...register('np_house')}
            className={styles.order__delivery__block__label__block__input}
          />
        </div>
        {/* Display error message if any */}
        {errors?.np_house && (
          <ErrorMessage message={errors.np_house?.message as string} errorTips={errorTextTips} />
        )}
      </label>

      <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Кв./Офіс </span>

        <div className={styles.order__delivery__block__label__block}>
          <input
            type='text'
            placeholder='Enter text'
            {...register('np_apart')}
            className={styles.order__delivery__block__label__block__input}
          />
        </div>
      </label>
    </>
  );
}
