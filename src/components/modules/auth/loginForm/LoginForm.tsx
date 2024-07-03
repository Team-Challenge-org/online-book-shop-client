import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Endpoints } from 'constants/api';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TLoginUserSchema, loginUserSchema } from 'validations/loginUserSchema';
import styles from './loginForm.module.scss';
import { RegisterField } from '../shared/registerField/RegisterField';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { TUser } from 'store/user/types';
import { loginUser } from 'store/user/asyncActions';

const LoginForm = () => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const methods = useForm<TLoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  function onSubmitData(data: TLoginUserSchema) {
    let userCredential: TUser = {
      email: data.email_or_number,
      password: data.login_password,
      isRememberMe,
    };
    dispatch(loginUser(userCredential));
    console.log(data);
    methods.reset();
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

        <label className={styles.checkbox_container}>
          <input
            type="checkbox"
            checked={isRememberMe}
            onChange={() => setIsRememberMe((prev) => !prev)}
            className={styles.checkbox}
          />
          <span>Запам’ятати мене</span>
        </label>

        <button className={activeBtnSubmit} type="submit">
          Увійти
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
