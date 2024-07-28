import styles from '../../orderPage.module.scss';

import type { TRegisterField } from 'types/auth';

import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { TDeliveryType } from 'types/common';

export function OrderField({ field }: { field: TDeliveryType | TRegisterField }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label key={field.id} className={styles.order__contacts__block__label}>
      <span className={styles.order__contacts__block__label__title}>{field.label}</span>

      <div
        className={
          errors?.[field.valueName]
            ? styles.input_box_error
            : styles.order__contacts__block__label__block
        }>
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.valueName)}
          className={styles.order__contacts__block__label__block__input}
        />
      </div>

      {/* Display error message if any */}
      {errors?.[field.valueName] && (
        <ErrorMessage
          message={errors[field.valueName]?.message as string}
          errorTips={field.errorTips}
        />
      )}
    </label>
  );
}
