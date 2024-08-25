import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { lastNameSchema, TLastNameSchema } from 'validations/profileSchema';
import { MdOutlineCreate } from 'react-icons/md';

export default function PersonalPageInput({ lastName }: { lastName: string }) {
  const [disableInput, setDisableInput] = useState(true);
  const methods = useForm<TLastNameSchema>({
    resolver: zodResolver(lastNameSchema),
  });

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { isValid },
  } = methods;

  const watchLastName = watch('last_name');

  useEffect(() => {
    setValue('last_name', lastName);
  }, []);

  console.log(watchLastName);

  return (
    <FormProvider {...methods}>
      <form>
        <label>
          <span>Прізвище</span>
          <input
            type='text'
            {...register('last_name')}
            placeholder={watchLastName}
            disabled={disableInput}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setDisableInput(!disableInput);
            }}>
            <MdOutlineCreate />
          </button>
        </label>
      </form>
    </FormProvider>
  );
}
