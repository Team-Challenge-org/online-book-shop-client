import { useFormContext } from 'react-hook-form';
import styles from '../orderPage.module.scss';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from 'store/store';
import { setService } from 'store/delivery/deliverySlice';

export default function DeliveryType() {
  const dispatch = useAppDispatch()

  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const watchService: number = watch('delivery_type');

  useEffect(() => {
    dispatch(setService(watchService))
  }, [watchService])

  return (
    <label className={styles.order__delivery__block__label}>
        <span className={styles.order__delivery__block__label__title}>Спосіб доставки *</span>

        <div className={errors?.city ? styles.input_box_error : styles.order__delivery__block__label__block}>

        <select
                className={styles.order__delivery__block__label__block__input}
                  id="delivery_type"
                  {...register('delivery_type')}
                  defaultValue='0'
                >
                  <option disabled value='0' >Оберіть спосіб доставки</option>
                  <option  value="1">НП. Відділення/поштомат</option>
                  <option  value="2">Укрпошта. Відділення</option>
                  <option  value="3">Meest. Відділеня</option>
                  <option  value="4">НП. Кур&lsquo;єр</option>
        </select>
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
