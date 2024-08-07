import { AuthModal } from './authModal/AuthModal';
import { SocialRegister } from './socialRegister/SocialRegister';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectAuthData, selectUserData } from 'store/user/selectors';
import { AppDispatch } from 'store/store';
import EnterOrRegisterAccount from './shared/enterOrRegisterAccount/EnterOrRegisterAccount';
import { logoutUser } from 'store/user/asyncActions';
import Spinner from 'components/elements/Spinner/Spinner';
import { useAuth } from 'contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ModalUserForm() {
  const auth = useSelector(selectAuthData, shallowEqual);
  const { user, loading } = useSelector(selectUserData);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { onCloseRegisterForm } = useAuth();
  const navigate = useNavigate();

  const logout2 = async (user: string | null | any) => {
    const { data } = await axios.post(
      'https://online-book-shop-1.onrender.com/api/v1/auth/logout',
      null,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      },
    );
    return console.log(data);
  };

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
          <>
            <button
              onClick={async () => {
                await dispatch(logoutUser(user));
                onCloseRegisterForm();
                navigate('/');
              }}>
              Logout
            </button>
            <button
              onClick={async () => {
                await logout2(user);
              }}>
              Logout2
            </button>
          </>
        )
      ) : (
        <EnterOrRegisterAccount />
      )}
    </AuthModal>
  );
}
