import React, { useState } from 'react';
import { useEffect } from 'react';
import { TNPAddress, TNPCity } from 'types/np';
import { useFormContext } from 'react-hook-form';
import { useAppDispatch } from 'store/store';
import { fetchAddress } from 'store/delivery/asyncActions';
import { useSelector } from 'react-redux';
import { selectDeliveryData } from 'store/delivery/selectors';
import { setAddress } from 'store/delivery/deliverySlice';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import styles from '../../../orderPage.module.scss';
import { errorTextTips } from 'constants/auth';

export default function NpBranch() {
  const [focusInput, setFocusInput] = useState(false);
  const dispatch = useAppDispatch();
  const deliveryData = useSelector(selectDeliveryData);

  const {
    watch,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const watchBranch: TNPAddress = watch('department');
  const watchCity: TNPCity = watch('city');

  useEffect(() => {
    dispatch(fetchAddress(watchBranch));
    dispatch(setAddress(watchBranch));
  }, [watchBranch, watchCity, dispatch]);

  return (
    <label className={styles.order__delivery__block__label}>
      <span className={styles.order__delivery__block__label__title}>
        Оберіть відділення/поштомат *
      </span>

      <div
        className={
          errors?.department ? styles.input_box_error : styles.order__delivery__block__label__block
        }>
        <input
          type='text'
          placeholder='Оберіть відділення/поштомат'
          {...register('department')}
          className={styles.order__delivery__block__label__block__input}
          onFocus={() => {
            setTimeout(() => {
              setFocusInput(true);
            }, 150);
          }}
          onBlur={() => {
            setTimeout(() => {
              setFocusInput(false);
            }, 200);
          }}
        />
        {focusInput ? (
          <MdKeyboardArrowUp className={styles.order__delivery__block__label__block__input_arrow} />
        ) : (
          <MdKeyboardArrowDown
            className={styles.order__delivery__block__label__block__input_arrow}
          />
        )}
        {focusInput && (
          <ul className={styles.order__delivery__block__label__block__list}>
            {deliveryData.addressArray.map((address: TNPAddress, index: number) => (
              <li
                key={index}
                className={styles.order__delivery__block__label__block__list__item}
                onClick={() => {
                  setValue('department', address.Description);
                  clearErrors();
                  setTimeout(() => {
                    setFocusInput(false);
                  }, 200);
                }}>
                {address.Description}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display error message if any */}
      {errors?.department && (
        <ErrorMessage message={errors.department.message as string} errorTips={errorTextTips} />
      )}
    </label>
  );
}
