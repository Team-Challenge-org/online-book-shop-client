import React, { useState } from 'react';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { TNPCity } from 'types/np';
import { useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from "react-icons/md";

export default function CitySelect() {
  const [cityArray, setCityArray] = useState([]);
  const [focusInput, setFocusInput] = useState(false)

  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const watchCity: TNPCity = watch('city');

  useEffect(() => {
    async function fetchCity() {
      try {
        const { data } = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
          apiKey: process.env.REACT_NP_API_BASE_KEY,
          modelName: 'AddressGeneral',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: watchCity,
            Limit: '10',
            Page: '1',
          },
        });
        setCityArray(data.data[0].Addresses);
      } catch (error) {
        console.log(error)
      }
    }

    fetchCity();
  }, [watchCity]);


  return (
    <>
      <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Місто *</span>

        <div className={errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block}>
          <input
            type="text"
            list="places"
            placeholder="Введіть назву міста"
            {...register('city')}
            className={styles.order__delivery__block__label__block__input}
            onFocus={() => {
              setTimeout(() => {
                setFocusInput(true)
              }, 150)
            }}
            onBlur={() => {
              setTimeout(() => {
                setFocusInput(false)
              }, 200)
            }}
          />
          <div className="">
          {focusInput ? <MdKeyboardArrowUp className={styles.order__delivery__block__label__block__input_arrow} /> : <MdKeyboardArrowDown className={styles.order__delivery__block__label__block__input_arrow} />}
          </div>
          {focusInput && <ul className={styles.order__delivery__block__label__block__list}>
            {cityArray.map((city: TNPCity, index: number) => (
              <li key={index} className={styles.order__delivery__block__label__block__list__item} onClick={() => setValue('city', city.MainDescription)}>{city.MainDescription}</li>
            ))}
          </ul>}
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
    </>
  );
}
