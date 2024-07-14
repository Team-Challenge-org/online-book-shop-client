import React, { useState } from 'react'
import { ErrorMessage } from "components/modules/auth/shared/errorMessage/ErrorMessage";
import axios from "axios";
import { useEffect } from "react";
import { TNPCity } from "types/np";
import { Controller, useForm, useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss'
import Select from 'react-select'
import { TOrderContactsSchema } from 'validations/orderContactsSchema';

export default function CitySelect() {
  const [cityArray, setCityArray] = useState<any>()
    
  const tips = [
    'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
    'Ви можете використовувати великі та малі літери.',
    'Довжина імені має бути від 2 до 30 символів.',
  ]

    const {
      watch,
      register,
      formState: { errors },
    } = useFormContext();

    const {control} = useForm<TOrderContactsSchema>({})
  
    const watchCity: TNPCity = watch('city')  
  
    useEffect(() => {
      async function fetchCity() {
        const {data} = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
          "apiKey": process.env.REACT_NP_API_BASE_KEY,
          "modelName": "AddressGeneral",
          "calledMethod": "searchSettlements",
          "methodProperties": {
          "CityName" : watchCity,
          "Limit" : "20",
          "Page" : "1"
          }
       }
       )
       setCityArray(data)

    //  console.log(data.data[0]?.Addresses.map((city: TNPCity) => city.MainDescription))
      }
  
      fetchCity()

  
    }, [watchCity])

    //  console.log(cityArray?.data[0]?.Addresses.map((city: TNPCity, index: number) => <span key={index}>{city.MainDescription}</span>))

     let cityArraySelect: {
      label: string;
      value: string;
      }[] = []
  
      let second = cityArray?.data[0]?.Addresses.map((city: TNPCity) => cityArraySelect.push({
        label: city.MainDescription,
        value: city.MainDescription
      }))

    

  return (
    <>
    <label className={styles.order__contacts__block__label}>
    <span className={styles.order__contacts__block__label__title}>Місто *</span>

    <div
      className={
        errors?.city ? styles.input_box_error : styles.order__contacts__block__label__block
      }
    >
      
      <input
        type='text'
        placeholder='Введіть назву міста'
        {...register('city')}
        className={styles.order__contacts__block__label__block__input}
      />
      
    </div>
    
    
   
      
    {/* Display error message if any */}
    {errors?.city && (
      <ErrorMessage
        message={errors.city?.message as string}
        errorTips={tips}
      />
    )}

   
  </label>
    
    <Controller
        name='city'
        control={control}
        render={({ field: { onChange, value, name, ref } }) => <Select ref={ref} options={cityArraySelect} value={cityArraySelect.find((c) => c.value === value)} onChange={val => val?.value} />}
      />
      </>
  )
}
