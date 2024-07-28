import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export default function ConfirmOrder() {
  const methods = useForm();

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  function onSubmitData(data: any) {
    console.log(data);
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
