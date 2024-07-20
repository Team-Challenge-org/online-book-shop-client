import { Controller, useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useState } from 'react';

const deliveryOptions = [
    {label: 'НП. Відділення/поштомат', value: 'НП. Відділення/поштомат'},
    {label: 'Укрпошта. Відділення', value: 'Укрпошта. Відділення'},
    {label: 'Meest. Відділеня', value: 'Meest. Відділеня'},
    {label: 'НП. Кур&lsquo;єр', value: 'НП. Кур&lsquo;єр'}
  ]
  
export default function DeliveryType() {
    const [delivery, setDelivery] = useState({
        label: 'НП. Відділення/поштомат', value: 'НП. Відділення/поштомат'
    })
    
  const {
    watch,
    register,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Спосіб доставки *</span>

        <div className={errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block}>

        <select
                className={styles.order__delivery__block__label__block__input}
                  id="delivery_type"
                  defaultValue="1"
                  {...register('delivery_type')}
                >
                  <option  value="1">НП. Відділення/поштомат</option>
                  <option  value="2">Укрпошта. Відділення</option>
                  <option  value="2">Meest. Відділеня</option>
                  <option  value="2">НП. Кур&lsquo;єр</option>
        </select>

          {/* <Controller
            name='delivery_type'
            control={control}
            defaultValue={delivery}
            render={(fields) => (
                <select
                    {...fields}
                    options={deliveryOptions}
                    placeholder="Оберіть спосіб доставки"
                    {...register('delivery_type')}
                    className={styles.order__delivery__block__label__block__input}
                />
            )}
            /> */}
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
