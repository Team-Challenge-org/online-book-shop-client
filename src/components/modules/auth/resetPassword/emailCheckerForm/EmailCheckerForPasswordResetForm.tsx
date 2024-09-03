import styles from './emailCheckerForPasswordResetForm.module.scss';

import { AppDispatch } from 'store/store';
import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { EmailField } from '../emailField/EmailField';
import { zodResolver } from '@hookform/resolvers/zod';
import { selectAuthData } from 'store/auth/selectors';
import { AuthModal } from '../../authModal/AuthModal';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { resetEmailCheckState } from 'store/auth/authSlice';
import { checkEmailForResetPassword } from 'store/auth/asyncActions';
import { emailCheckerSchema, type TEmailCheckerSchema } from 'validations/emailCheckerSchema';

export function EmailCheckerForPasswordResetForm() {
  const methods = useForm<TEmailCheckerSchema>({
    resolver: zodResolver(emailCheckerSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const { onCloseEmailCheckerForm } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailExists, setIsEmailExists] = useState(false);

  const { isEmailChecked, error: isError, loading: isCheckingEmail } = useSelector(selectAuthData);

  useEffect(() => {
    if (isEmailChecked) {
      dispatch(resetEmailCheckState());
      setIsEmailExists(isEmailChecked);
    }

    if (isError && !isEmailChecked) {
      setErrorMessage('Такого користувача не існує');
      dispatch(resetEmailCheckState());
    }
  }, [isError, dispatch, isEmailChecked, setErrorMessage, onCloseEmailCheckerForm]);

  const handleEmailValidation = async () => {
    await methods.trigger('email'); // is valid email
  };

  function onSubmitData(data: TEmailCheckerSchema) {
    if (methods.formState.isValid) {
      dispatch(checkEmailForResetPassword(data.email));
    }
  }

  return (
    <FormProvider {...methods}>
      {!isEmailExists ? (
        <form onSubmit={methods.handleSubmit(onSubmitData)}>
          <AuthModal>
            <EmailField errorMessage={errorMessage} />

            <button
              type='submit'
              onClick={handleEmailValidation}
              className={methods.formState.isValid ? styles.btn_active : styles.btn_unactive}>
              {isCheckingEmail ? 'Перевірка користувача...' : 'Створити новий пароль'}
            </button>
          </AuthModal>
        </form>
      ) : (
        <AuthModal>
          <p className={styles.success_text}>
            Посилання на скидання пароля надіслано.
            <br />
            <br />
            Перевірте свою електронну пошту для створення нового пароля.
          </p>
        </AuthModal>
      )}
    </FormProvider>
  );
}
