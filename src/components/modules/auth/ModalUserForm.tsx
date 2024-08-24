
import { AuthModal } from "./authModal/AuthModal";
import { SocialRegister } from "./socialRegister/SocialRegister";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectAuthData, selectUserData } from "store/user/selectors";
import { AppDispatch } from "store/store";
import EnterOrRegisterAccount from "./shared/enterOrRegisterAccount/EnterOrRegisterAccount";
import { logoutUser } from "store/user/asyncActions";
import Spinner from "components/elements/Spinner/Spinner";
import { useAuth } from "pages/AuthContext";
import { useNavigate } from "react-router-dom";


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

      <SocialRegister />

      {isAuth ? (
        loading ? (
          <Spinner />
        ) : (
          <button
            onClick={async () => {
              await dispatch(logoutUser(user));
              onCloseRegisterForm();
              navigate("/");
            }}
          >
            Logout
          </button>
        )

      ) : (
        <>
          <SocialRegister />
          {isAuth ? '' : <EnterOrRegisterAccount />}
        </>
      )}
    </AuthModal>
  );
}
function setIsRegisterForm(arg0: boolean) {
  throw new Error('Function not implemented.');
}
