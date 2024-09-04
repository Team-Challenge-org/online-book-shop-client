import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
  TProfileSchema,
} from 'validations/profileSchema';
import PersonalPageInput from './PersonalPageInput';
import { selectUserData } from 'store/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getUser } from 'store/user/asyncActions';
import Spinner from 'components/elements/Spinner/Spinner';
import styles from '../profilePage.module.scss';
import { TPersonalProfileField } from 'types/common';
import PersonalPagePasswordInput from './PersonalPagePasswordInput';
import {
  errorEmailTips,
  errorFirstNameTips,
  errorLastNameTips,
  errorPhoneNumberTips,
} from 'constants/auth';

const registerFields: TPersonalProfileField[] = [
  {
    id: 1,
    type: 'text',
    label: 'Ім’я',
    valueName: 'first_name',
    errorTips: errorFirstNameTips,
    schema: firstNameSchema,
  },
  {
    id: 2,
    type: 'text',
    label: 'Прізвище',
    valueName: 'last_name',
    errorTips: errorLastNameTips,
    schema: lastNameSchema,
  },
  {
    id: 3,
    type: 'number',
    label: 'Номер телефону',
    valueName: 'phone_number',
    errorTips: errorPhoneNumberTips,
    schema: phoneNumberSchema,
  },
  {
    id: 4,
    type: 'email',
    label: 'Електронна пошта',
    valueName: 'email',
    errorTips: errorEmailTips,
    schema: emailSchema,
  },
];

export default function PersonalPage() {
  const [firstName, setFirstName] = useState('');
  const user = useSelector(selectUserData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const methods = useForm<TProfileSchema>({
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
          {registerFields.map((field) => (
            <PersonalPageInput field={field} key={field.id} />
          ))}
          <PersonalPagePasswordInput />
        </>
      )}
    </div>
  );
}
