import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Endpoints } from 'constants/api';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TLoginUserSchema, loginUserSchema } from 'validations/loginUserSchema';
import styles from './loginForm.module.scss';
import { RegisterField } from '../shared/registerField/RegisterField';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

const LoginForm = () => {
  const methods = useForm<TLoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
  });

  function onSubmitData(data: TLoginUserSchema) {
    //try {
    //  axios.post(`${Endpoints.LOGIN}`, {
    //    email: data.email,
    //    password: data.login_password,
    //  });
    //} catch (error) {
    //  console.log(error);
    //}
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
        <button className={activeBtnSubmit} type="submit">
          Увійти
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
