import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import axiosConfig from 'utils/axiosConfig';
import { firstNameSchema, TFirstNameSchema } from 'validations/profileSchema';
import PersonalPageInput from './PersonalPageInput';
import { selectUserData } from 'store/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import { getUser } from 'store/user/asyncActions';
import Spinner from 'components/elements/Spinner/Spinner';

export default function PersonalPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(user);

  //useEffect(() => {
  //  const getData = async () => {
  //    const { data } = await axiosConfig.get('/api/v1/profile/user');

  //    console.log(data);

  //    setFirstName(data.firstName);
  //    return data;
  //  };

  //  getData();
  //}, []);

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
    <div>
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
          <PersonalPageInput lastName={user.lastName} />
        </>
      )}
    </div>
  );
}
