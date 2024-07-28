import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export default function ConfirmOrder() {
    
  const methods = useForm();
  
  const {
    formState: { isValid },
  } = methods;

  return (
    <FormProvider {...methods}>
        <button type="submit">Підтвердити замовлення</button>
    </FormProvider>
  )
}
