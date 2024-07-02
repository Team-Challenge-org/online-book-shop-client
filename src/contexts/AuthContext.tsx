import React, { createContext, useContext, useState } from "react";

type TAuthContext = {
  showRegisterForm: boolean;
  onShowRegisterForm: () => void;
  onCloseRegisterForm: () => void;
};

const AuthContext = createContext<TAuthContext>({
  showRegisterForm: false,
  onShowRegisterForm: () => {},
  onCloseRegisterForm: () => {},
});

type TAuthContextProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: TAuthContextProps) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  function handleShowRegisterForm() {
    setShowRegisterForm(true);
  }

  function handleCloseRegisterForm() {
    setShowRegisterForm(false);
  }

  const contextValue: TAuthContext = {
    showRegisterForm,
    onShowRegisterForm: handleShowRegisterForm,
    onCloseRegisterForm: handleCloseRegisterForm,
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
