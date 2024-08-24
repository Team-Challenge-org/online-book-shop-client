import { AuthModal } from './authModal/AuthModal';
import { SocialRegister } from './socialRegister/SocialRegister';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';
import { useSelector } from 'react-redux';
import { selectAuthData, selectUserData } from 'store/user/selectors';
import { useEffect, useState } from 'react';
import Spinner from 'components/elements/Spinner/Spinner';
import { useAuth } from 'contexts/AuthContext';

export default function ModalUserForm() {
  const auth = useSelector(selectAuthData);
  const [isAuth, setIsAuth] = useState(false);
  const { loading } = useSelector(selectUserData);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsRegisterForm } = useAuth();

  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setIsRegisterForm(false);
  }, [loading, setIsRegisterForm]);

  return (
    <AuthModal>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SocialRegister />
          {isAuth ? '' : <EnterOrRegisterAccount />}
        </>
      )}
    </AuthModal>
  );
}