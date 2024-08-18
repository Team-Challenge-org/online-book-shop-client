import { AuthModal } from './authModal/AuthModal';
import { SocialRegister } from './socialRegister/SocialRegister';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'store/user/selectors';
import { useEffect, useState } from 'react';

export default function ModalUserForm() {
  const auth = useSelector(selectAuthData);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  return (
    <AuthModal>
      <SocialRegister />

      {isAuth ? '' : <EnterOrRegisterAccount />}
    </AuthModal>
  );
}
