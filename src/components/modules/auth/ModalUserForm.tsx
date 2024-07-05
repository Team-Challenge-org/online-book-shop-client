import { AuthModal } from './authModal/AuthModal';
import { SocialRegister } from './socialRegister/SocialRegister';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectAuthData } from 'store/user/selectors';
import { AppDispatch } from 'store/store';
import { logout } from 'store/user/userSlice';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';

export default function ModalUserForm() {
  const auth = useSelector(selectAuthData, shallowEqual);
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    if (auth) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [auth])

  return (
    <AuthModal>
      <SocialRegister />

      {isAuth ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
       <EnterOrRegisterAccount />
      )}
    </AuthModal>
  );
}
