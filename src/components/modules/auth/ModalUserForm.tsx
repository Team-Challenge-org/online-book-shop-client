import { AuthModal } from './authModal/AuthModal';
import { SocialRegister } from './socialRegister/SocialRegister';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectAuthData, selectUserData } from 'store/user/selectors';
import { AppDispatch } from 'store/store';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';
import { logoutUser } from 'store/user/asyncActions';
import Spinner from 'components/elements/Spinner/Spinner';

export default function ModalUserForm() {
  const auth = useSelector(selectAuthData, shallowEqual);
  const { user, loading } = useSelector(selectUserData);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

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

      {isAuth ? (
        loading ? (
          <Spinner />
        ) : (
          <button onClick={() => dispatch(logoutUser(user))}>Logout</button>
        )
      ) : (
        <EnterOrRegisterAccount />
      )}
    </AuthModal>
  );
}
