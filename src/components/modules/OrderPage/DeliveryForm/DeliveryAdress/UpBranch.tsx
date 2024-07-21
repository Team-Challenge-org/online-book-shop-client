import React from 'react'
import styles from '../../orderPage.module.scss';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';

export default function UpBranch() {
    const {
      register,
      formState: { errors },
    } = useFormContext();
  return (
    <label className={styles.order__delivery__block__label}>
    <span className={styles.order__delivery__block__label__title}>Оберіть відділення *</span>

        <div className={errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block}>
          <input
            type="text"
            placeholder="Оберіть відділення"
            {...register('up_branch')}
            className={styles.order__delivery__block__label__block__input}
          />
        </div>

        {/* Display error message if any */}
        {errors?.city && (
          <ErrorMessage
            message={errors.city?.message as string}
            errorTips={[
              'Ви можете використовувати лише українську мову',
              'Ви можете використовувати великі та малі літери.',
            ]}
          />
        )}
        </label>
  )
}
