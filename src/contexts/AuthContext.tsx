import React, { createContext, useContext, useState } from "react";

type TAuthContext = {
  showRegisterForm: boolean;
  showResetPasswordForm: boolean;
  onShowRegisterForm: () => void;
  onCloseRegisterForm: () => void;
  onShowResetPasswordForm: () => void;
  onCloseResetPasswordForm: () => void;
};

const AuthContext = createContext<TAuthContext>({
  showRegisterForm: false,
  showResetPasswordForm: false,
  onShowRegisterForm: () => {},
  onCloseRegisterForm: () => {},
  onShowResetPasswordForm: () => {},
  onCloseResetPasswordForm: () => {},
});

type TAuthContextProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: TAuthContextProps) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

  function handleShowResetPasswordForm() {
    setShowResetPasswordForm(true);
    setShowRegisterForm(false);
  }

  function handleCloseResetPasswordForm() {
    setShowResetPasswordForm(false);
  }

  function handleShowRegisterForm() {
    setShowRegisterForm(true);
  }

  function handleCloseRegisterForm() {
    setShowRegisterForm(false);
  }

  const contextValue: TAuthContext = {
    showRegisterForm,
    showResetPasswordForm,
    onShowRegisterForm: handleShowRegisterForm,
    onCloseRegisterForm: handleCloseRegisterForm,
    onShowResetPasswordForm: handleShowResetPasswordForm,
    onCloseResetPasswordForm: handleCloseResetPasswordForm,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
