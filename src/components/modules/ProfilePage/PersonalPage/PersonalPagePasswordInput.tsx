import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { passwordSchema, TPasswordSchema } from 'validations/profileSchema';
import { MdOutlineCreate, MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { ErrorMessage } from 'components/modules/auth/shared/errorMessage/ErrorMessage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { updateUser, updateUserPassword } from 'store/user/asyncActions';
import { PasswordComplexity } from 'components/modules/auth/shared/passwordComplexity/PasswordComplexity';
import { usePasswordComplexity } from 'hooks/usePasswordComplexity';
import styles from '../profilePage.module.scss';

export default function PersonalPagePasswordInput() {
  const [disableInput, setDisableInput] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const methods = useForm<TPasswordSchema>({
    resolver: zodResolver(passwordSchema),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    setFocus,
    formState: { errors },
  } = methods;

  const watchField = watch('password');

  const {
    passwordHidden,
    isPasswordField,
    setPasswordHidden,
    passwordComplexity,
    passwordComplexityMessage,
  } = usePasswordComplexity(watchField, { valueName: 'password' });

  const handleEdit = () => {
    setTimeout(() => {
      setFocus('password');
    }, 10);
  };

  const onSubmit = async () => {
    dispatch(updateUserPassword(watchField));
  };

  return (
    <FormProvider {...methods}>
      <span className={styles.profile__personal__title}>Пароль</span>
      <form className={styles.profile__personal__form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.profile__personal__form__label}>
          <input
            className={styles.profile__personal__form__label__input}
            type={passwordHidden ? 'password' : 'text'}
            {...register('password')}
            placeholder='*********'
            disabled={disableInput}
          />
          {
            <span
              className={styles.profile__personal__form__label__input__eye_icon}
              onClick={() => setPasswordHidden((prev) => !prev)}>
              {passwordHidden ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
            </span>
          }
          {watchField && (
            <PasswordComplexity
              passwordComplexity={passwordComplexity}
              passwordComplexityMessage={passwordComplexityMessage}
            />
          )}
        </label>

        <button
          onClick={(e) => {
            e.preventDefault();
            setDisableInput(!disableInput);
          }}>
          <div className={styles.profile__personal__form__icon} onClick={() => handleEdit()}>
            <MdOutlineCreate color='rgba(149, 149, 149, 1)' size='26.67px' />
          </div>
        </button>
        <button className={`${styles.profile__personal__form__submit} button`} type='submit'>
          Зберегти зміни
        </button>
      </form>
      {/* Display error message if any */}
      {(errors as any)?.password && (
        <ErrorMessage
          message={(errors as any).password.message as string}
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
