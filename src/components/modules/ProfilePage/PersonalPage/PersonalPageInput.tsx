import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  lastNameSchema,
  firstNameSchema,
  emailSchema,
  phoneNumberSchema,
  TFirstNameSchema,
  TLastNameSchema,
  TEmailSchema,
  TPhoneNumberSchema,
} from 'validations/profileSchema';
import { MdOutlineCreate } from 'react-icons/md';
import styles from '../profilePage.module.scss';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useSelector } from 'react-redux';
import { selectUserData } from 'store/user/selectors';
import { TRegisterField } from 'types/auth';

export default function PersonalPageInput({ field }: { field: TRegisterField }) {
  const [disableInput, setDisableInput] = useState(true);
  const user = useSelector(selectUserData);

  type ConditionalType<T> = T extends TFirstNameSchema
    ? TFirstNameSchema
    : T extends TLastNameSchema
    ? TLastNameSchema
    : T extends TEmailSchema
    ? TEmailSchema
    : T extends TPhoneNumberSchema
    ? TPhoneNumberSchema
    : '';

  const methods = useForm<TLastNameSchema>({
    resolver: zodResolver(lastNameSchema),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    setFocus,
    formState: { errors },
  } = methods;

  const watchLastName = watch('last_name');

  useEffect(() => {
    setValue('last_name', user.lastName);
  }, []);

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <FormProvider {...methods}>
      <span className={styles.profile__personal__title}>Прізвище</span>
      <form className={styles.profile__personal__form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.profile__personal__form__label}>
          <input
            className={styles.profile__personal__form__label__input}
            type='text'
            {...register('last_name')}
            defaultValue={watchLastName}
            placeholder={watchLastName}
            disabled={disableInput}
          />
        </label>

        <button
          onClick={(e) => {
            e.preventDefault();
            setDisableInput(!disableInput);
          }}>
          <div
            className={styles.profile__personal__form__icon}
            onClick={() =>
              setTimeout(() => {
                setFocus('last_name');
              }, 10)
            }>
            <MdOutlineCreate color='rgba(149, 149, 149, 1)' size='26.67px' />
          </div>
        </button>
        <button className={`${styles.profile__personal__form__submit} button`} type='submit'>
          Зберегти зміни
        </button>
      </form>
      {/* Display error message if any */}
      {errors?.last_name && (
        <ErrorMessage
          message={errors.last_name.message as string}
          errorTips={[
            'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
            'Ви можете використовувати великі та малі літери.',
            'Довжина імені має бути від 2 до 50 символів.',
          ]}
        />
      )}
    </FormProvider>
  );
}
