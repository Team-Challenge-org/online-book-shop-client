import styles from './registerForm.module.scss';

import type { TRegisterField } from 'types/auth';

import { registerUserSchema, TRegisterUserSchema } from 'validations/registerUserSchema';

import { AppDispatch } from 'store/store';
import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility } from 'react-icons/md';
import { zodResolver } from '@hookform/resolvers/zod';
import { selectAuthData } from 'store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'store/auth/asyncActions';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { FormProvider, useForm } from 'react-hook-form';
import Spinner from 'components/elements/Spinner/Spinner';
import { RegisterField } from '../shared/registerField/RegisterField';
import {
  errorEmailTips,
  errorFirstNameTips,
  errorLastNameTips,
  errorPasswordTips,
  errorPhoneNumberTips,
} from 'constants/auth';

const registerFields: TRegisterField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ваше ім’я *',
    placeholder: 'Введіть ваше ім’я',
    valueName: 'first_name',
    errorTips: errorFirstNameTips,
  },
  {
    id: 2,
    type: 'text',
    label: 'Ваше прізвище *',
    placeholder: 'Введіть ваше прізвище',
    valueName: 'last_name',
    errorTips: errorLastNameTips,
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону *',
    placeholder: '+38',
    valueName: 'phone_number',
    errorTips: errorPhoneNumberTips,
  },
  {
    id: 4,
    type: 'email',
    label: 'Електронна пошта *',
    placeholder: 'Введіть електронну пошту',
    valueName: 'email',
    errorTips: errorEmailTips,
  },
  {
    id: 5,
    type: 'password',
    label: 'Пароль *',
    placeholder: 'Введіть пароль',
    valueName: 'password',
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
    errorTips: errorPasswordTips,
  },
  {
    id: 6,
    type: 'password',
    label: 'Підтвердіть пароль *',
    placeholder: 'Введіть пароль',
    valueName: 'confirm_password',
    iconOpenEye: <MdOutlineVisibility />,
    iconCloseEye: <MdOutlineVisibilityOff />,
  },
];

export function RegisterForm() {
  const { loading } = useSelector(selectAuthData);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { setIsRegisterForm, onCloseRegisterForm } = useAuth();

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setIsRegisterForm(true);
  }, [loading, setIsRegisterForm]);

  const methods = useForm<TRegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [isPublicOfferAccepted, setIsPublicOfferAccepted] = useState(false);

  function onSubmitData(data: TRegisterUserSchema) {
    if (isPublicOfferAccepted) {
      dispatch(registerUser(data));
      navigate('/');
      methods.reset();
      onCloseRegisterForm();
    }
  }

  const activeBtnSubmit =
    isValid && isPublicOfferAccepted ? styles.btn_active : styles.btn_unactive;

  return (
    <FormProvider {...methods}>
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmitData)}>
          {registerFields.map((field) => (
            <RegisterField field={field} key={field.id} />
          ))}

          <div className={styles.checkbox_container}>
            <input
              type='checkbox'
              checked={isPublicOfferAccepted}
              onChange={() => setIsPublicOfferAccepted((prev) => !prev)}
              className={styles.checkbox}
            />

            <span className={styles.checkbox_label}>
              Я ознайомлений(-а) з публічною офертою та приймаю її
            </span>
          </div>

          <button className={activeBtnSubmit} type='submit'>
            Зареєструватись
          </button>
        </form>
      )}
    </FormProvider>
  );
}
