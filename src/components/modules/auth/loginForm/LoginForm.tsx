import styles from './loginForm.module.scss';

import { authStatus, type TUser } from 'store/auth/types';

import { AppDispatch } from 'store/store';
import React, { useEffect, useRef, useState } from 'react';
import { loginUser } from 'store/auth/asyncActions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { RegisterField } from '../shared/registerField/RegisterField';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { TLoginUserSchema, loginUserSchema } from 'validations/loginUserSchema';
import { useAuth } from 'contexts/AuthContext';
import { selectAuthData } from 'store/auth/selectors';

const LoginForm = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { onCloseRegisterForm } = useAuth();
  const { error, status } = useSelector(selectAuthData);

  const methods = useForm<TLoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  async function onSubmitData(data: TLoginUserSchema) {
    let userCredential: TUser = {
      emailOrPhone: data.email_or_number,
      password: data.login_password,
      rememberMe: isRememberMe,
    };
    await dispatch(loginUser(userCredential));

    function reset() {
      methods.reset();
      onCloseRegisterForm();
    }

    status === authStatus.SUCCESS ? reset() : '';
  }

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const activeBtnSubmit = isValid ? styles.btn_active : styles.btn_unactive;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitData)} className={styles.login}>
        <RegisterField
          field={{
            id: 400,
            type: 'text',
            label: 'Номер телефону або електронна пошта *',
            placeholder: 'Введіть номер телефону або електронну пошту',
            valueName: 'email_or_number',
          }}
        />

        <RegisterField
          resetPassword={true}
          field={{
            id: 401,
            type: 'password',
            label: 'Пароль *',
            placeholder: 'Введіть пароль',
            valueName: 'login_password',
            iconOpenEye: <MdOutlineVisibility />,
            iconCloseEye: <MdOutlineVisibilityOff />,
          }}
        />

        {error ? (
          <span className={styles.login__error}>
            Будь ласка, перевірте правильність введення пошти, телефону, та паролю
          </span>
        ) : (
          ''
        )}

        <label className={styles.checkbox_container}>
          <input
            type='checkbox'
            checked={isRememberMe}
            onChange={() => setIsRememberMe((prev) => !prev)}
            className={styles.checkbox}
          />
          <span>Запам’ятати мене</span>
        </label>

        <button className={activeBtnSubmit} type='submit'>
          Увійти
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
