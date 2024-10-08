import React, { useState } from 'react';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useEffect } from 'react';
import { TNPCity } from 'types/np';
import { useFormContext } from 'react-hook-form';
import styles from '../../orderPage.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useAppDispatch } from 'store/store';
import { fetchCity } from 'store/delivery/asyncActions';
import { useSelector } from 'react-redux';
import { selectDeliveryData } from 'store/delivery/selectors';
import { setCity } from 'store/delivery/deliverySlice';
import { errorTextTips } from 'constants/auth';

export default function CitySelect() {
  const [focusInput, setFocusInput] = useState(false);
  const [delivery, setDelivery] = useState('1');
  const dispatch = useAppDispatch();
  const deliveryData = useSelector(selectDeliveryData);

  useEffect(() => {
    setDelivery(deliveryData.service);
  }, [deliveryData, delivery]);

  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const watchCity: TNPCity = watch('city');

  useEffect(() => {
    dispatch(fetchCity(watchCity));
    dispatch(setCity(watchCity));
  }, [watchCity, dispatch]);

  return (
    <label className={styles.order__delivery__block__label}>
      <span className={styles.order__delivery__block__label__title}>Місто *</span>

      <div
        className={
          errors.city ? styles.input_box_error : styles.order__delivery__block__label__block
        }>
        {delivery === undefined || delivery === '1' || delivery === '4' ? (
          <>
            <input
              type='text'
              placeholder='Введіть назву міста'
              {...register('city')}
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
              <MdKeyboardArrowUp
                className={styles.order__delivery__block__label__block__input_arrow}
              />
            ) : (
              <MdKeyboardArrowDown
                className={styles.order__delivery__block__label__block__input_arrow}
              />
            )}
            {focusInput && (
              <ul className={styles.order__delivery__block__label__block__list}>
                {deliveryData.cityArray.map((city: TNPCity, index: number) => (
                  <li
                    key={index}
                    className={styles.order__delivery__block__label__block__list__item}
                    onClick={() => {
                      setValue('city', city.MainDescription);
                      setTimeout(() => {
                        setFocusInput(false);
                      }, 200);
                    }}>
                    {city.MainDescription}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <input
            type='text'
            placeholder='Введіть назву міста'
            {...register('city')}
            className={styles.order__delivery__block__label__block__input}
          />
        )}
      </div>

      {/* Display error message if any */}
      {errors?.city && (
        <ErrorMessage message={errors?.city.message as string} errorTips={errorTextTips} />
      )}
    </label>
  );
}
