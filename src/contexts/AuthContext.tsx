import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'store/auth/selectors';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAppDispatch } from 'store/store';
import { clearErrorState } from 'store/auth/authSlice';

type TAuthContext = {
  showRegisterForm: boolean;
  showEmailCheckerForm: boolean;
  onShowRegisterForm: () => void;
  onCloseRegisterForm: () => void;
  onShowEmailCheckerForm: () => void;
  onCloseEmailCheckerForm: () => void;
  onShowResetPasswordForm: () => void;

  showResetPasswordForm: boolean;
  onCloseResetPasswordForm: () => void;

  isRegisterForm: boolean;
  setIsRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;

  isAuth: boolean;
};

const AuthContext = createContext<TAuthContext>({
  showRegisterForm: false,
  showEmailCheckerForm: false,
  onShowRegisterForm: () => {},
  onCloseRegisterForm: () => {},
  onShowEmailCheckerForm: () => {},
  onCloseEmailCheckerForm: () => {},
  onShowResetPasswordForm: () => {},

  showResetPasswordForm: true,
  onCloseResetPasswordForm: () => {},

  isRegisterForm: false,
  setIsRegisterForm: () => {},

  isAuth: false,
});

type TAuthContextProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: TAuthContextProps) {
  const dispatch = useDispatch();
  const isAuthenticatedUser = useSelector(selectIsAuth);

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showEmailCheckerForm, setShowEmailCheckerForm] = useState(false);

  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    isAuthenticatedUser ? setIsAuth(true) : setIsAuth(false);
  }, [isAuthenticatedUser]);

  function handleshowEmailCheckerForm() {
    setShowEmailCheckerForm(true);
    setShowRegisterForm(false);
  }

  function handleCloseEmailCheckerForm() {
    setShowEmailCheckerForm(false);
  }

  function handleShowRegisterForm() {
    setShowRegisterForm(true);
  }

  function handleCloseRegisterForm() {
    setShowRegisterForm(false);
    dispatch(clearErrorState());
  }

  function handleCloseResetPasswordForm() {
    setShowResetPasswordForm(false);
  }

  function handleShowResetPasswordForm() {
    setShowResetPasswordForm(true);
  }

  const contextValue: TAuthContext = {
    showRegisterForm,
    showEmailCheckerForm,

    onShowRegisterForm: handleShowRegisterForm,
    onCloseRegisterForm: handleCloseRegisterForm,

    onShowEmailCheckerForm: handleshowEmailCheckerForm,
    onCloseEmailCheckerForm: handleCloseEmailCheckerForm,

    showResetPasswordForm,
    onCloseResetPasswordForm: handleCloseResetPasswordForm,
    onShowResetPasswordForm: handleShowResetPasswordForm,

    isRegisterForm,
    setIsRegisterForm,

    isAuth,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error('AuthContext was used outside of AuthProvider');

  return context;
}

export { AuthProvider, useAuth };
