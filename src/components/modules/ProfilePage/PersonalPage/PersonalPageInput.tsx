import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TProfileSchema } from 'validations/profileSchema';
import { MdOutlineCreate } from 'react-icons/md';
import styles from '../profilePage.module.scss';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'store/user/selectors';
import { TPersonalProfileField } from 'types/common';
import { AppDispatch } from 'store/store';
import { updateUser } from 'store/user/asyncActions';

export default function PersonalPageInput({ field }: { field: TPersonalProfileField }) {
  const [disableInput, setDisableInput] = useState(true);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch<AppDispatch>();

  const methods = useForm<TProfileSchema>({
    resolver: zodResolver(field.schema),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    setFocus,
    formState: { errors },
  } = methods;

  const watchField = watch(field.valueName);

  useEffect(() => {
    setValue(
      field.valueName,
      field.valueName === 'phone_number'
        ? user.phoneNumber
        : field.valueName === 'first_name'
        ? user.firstName
        : field.valueName === 'last_name'
        ? user.lastName
        : field.valueName === 'email'
        ? user.email
        : '',
    );
  }, []);

  const onSubmit = async () => {
    let updatedField =
      field.valueName === 'first_name'
        ? {
            firstName: watchField,
          }
        : field.valueName === 'last_name'
        ? {
            lastName: watchField,
          }
        : field.valueName === 'email'
        ? {
            email: watchField,
          }
        : field.valueName === 'phone_number'
        ? {
            phoneNumber: watchField,
          }
        : '';

    dispatch(updateUser(updatedField));
  };

  return (
    <FormProvider {...methods}>
      <span className={styles.profile__personal__title}>{field.label}</span>
      <form className={styles.profile__personal__form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.profile__personal__form__label}>
          <input
            className={styles.profile__personal__form__label__input}
            type='text'
            {...register(field.valueName)}
            defaultValue={watchField}
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
                setFocus(field.valueName);
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
      {(errors as any)?.[field.valueName] && (
        <ErrorMessage
          message={(errors as any)[field.valueName].message as string}
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
