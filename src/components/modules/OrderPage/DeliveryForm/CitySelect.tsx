import React, { useState } from 'react';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import axios from 'axios';
import { useEffect } from 'react';
import { TNPCity } from 'types/np';
import { useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function CitySelect() {
  const [cityArray, setCityArray] = useState([]);

  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const watchCity: TNPCity = watch('city');

  useEffect(() => {
    async function fetchCity() {
      const { data } = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: process.env.REACT_NP_API_BASE_KEY,
        modelName: 'AddressGeneral',
        calledMethod: 'searchSettlements',
        methodProperties: {
          CityName: watchCity,
          Limit: '20',
          Page: '1',
        },
      });
      setCityArray(data.data[0].Addresses);
    }

    fetchCity();
  }, [watchCity]);

  return (
    <>
      <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Місто *</span>

        <div className={errors?.city ? styles.input_box_error : styles.order__delivery}>
          <input
            type="text"
            list="places"
            placeholder="Введіть назву міста"
            {...register('city')}
            className={styles.order__delivery__block__label__block__input}
          />
          <datalist id="places">
            {cityArray.map((city: TNPCity, index: number) => (
              <option key={index}>{city.MainDescription}</option>
            ))}
          </datalist>
        </div>

        {/* Display error message if any */}
        {errors?.city && (
          <ErrorMessage
            message={errors.city?.message as string}
            errorTips={[
              'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
              'Ви можете використовувати великі та малі літери.',
              'Довжина імені має бути від 2 до 30 символів.',
            ]}
          />
        )}
      </label>
    </>
  );
}
