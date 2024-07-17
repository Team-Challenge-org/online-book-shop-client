import styles from "../orderPage.module.scss";

import type { TRegisterField } from "types/auth";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "components/modules/auth/shared/errorMessage/ErrorMessage";
import { TDeliveryType } from "types/common";
import { useEffect } from "react";
import axios from "axios";
import { TNPCity } from "types/np";

export function OrderField({ field }: { field: TDeliveryType | TRegisterField }) {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  // const watchCity = watch('city')  

  // useEffect(() => {
  //   async function fetchCity() {
  //     const {data} = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
  //       "apiKey": process.env.REACT_NP_API_BASE_KEY,
  //       "modelName": "AddressGeneral",
  //       "calledMethod": "searchSettlements",
  //       "methodProperties": {
  //    "CityName" : watchCity,
  //    "Limit" : "50",
  //    "Page" : "1"
  //       }
  //    }
  //    )
     
  //  console.log(data.data[0].Addresses.map((city: TNPCity) => city.MainDescription))
  //   }

  //   fetchCity()

  // }, [watchCity])

  return (
    <label key={field.id} className={styles.order__contacts__block__label}>
      <span className={styles.order__contacts__block__label__title}>{field.label}</span>

      <div
        className={
          errors?.[field.valueName] ? styles.input_box_error : styles.order__contacts__block__label__block
        }
      >
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
