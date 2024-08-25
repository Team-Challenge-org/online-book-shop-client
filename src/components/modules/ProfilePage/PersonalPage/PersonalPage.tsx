import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { firstNameSchema, TFirstNameSchema } from 'validations/profileSchema';
import PersonalPageInput from './PersonalPageInput';
import { selectUserData } from 'store/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getUser } from 'store/user/asyncActions';
import Spinner from 'components/elements/Spinner/Spinner';
import styles from '../profilePage.module.scss';
import { TRegisterField } from 'types/auth';

const registerFields: TRegisterField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ваше ім’я *',
    placeholder: 'Введіть ваше ім’я',
    valueName: 'first_name',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 30 символів.',
    ],
  },
  {
    id: 2,
    type: 'text',
    label: 'Ваше прізвище *',
    placeholder: 'Введіть ваше прізвище',
    valueName: 'last_name',
    errorTips: [
      'Ви можете використовувати лише кирилицю, латиницю та арабські цифри.',
      'Ви можете використовувати великі та малі літери.',
      'Довжина імені має бути від 2 до 50 символів.',
    ],
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону *',
    placeholder: '+38',
    valueName: 'phone_number',
    errorTips: [
      'Ви можете використовувати лише арабські цифри та «+».',
      'Довжина мобільного номера має бути 13 символів, включаючи «+».',
    ],
  },
  {
    id: 4,
    type: 'email',
    label: 'Електронна пошта *',
    placeholder: 'Введіть електронну пошту',
    valueName: 'email',
    errorTips: [
      "Ви можете використовувати лише арабські цифри, латиницю та наступні символи ~ ! $ % ^ & * _ = + } { ' ? - @.",
      'Ви можете використовувати великі та малі літери.',
      'Пошта має містити “@”.',
      "Пошта повинна мати будь-який діючий домейн окрім “mail.ru”, “yandex.ru” та інших доменів, пов'язаних з росією.",
    ],
  },
];

export default function PersonalPage() {
  const [firstName, setFirstName] = useState('');
  const user = useSelector(selectUserData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const methods = useForm<TFirstNameSchema>({
    resolver: zodResolver(firstNameSchema),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { isValid },
  } = methods;

  const watchName = watch('first_name');

  useEffect(() => {
    setValue('first_name', firstName);
  }, [watchName, firstName]);

  return (
    <div className={styles.profile__personal}>
      {user.loading ? (
        <Spinner />
      ) : (
        <>
          <FormProvider {...methods}>
            <form>
              <label>
                <span>Ім’я</span>
                <input type='text' placeholder={watchName} disabled />
              </label>
            </form>
          </FormProvider>
          <PersonalPageInput field={registerFields[1]} />
        </>
      )}
    </div>
  );
}
