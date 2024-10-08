import { useEffect } from "react";
import { NAV_URL } from "constants/global";
import { useAuth } from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Slider from "components/assets/Slider/Slider";
import CatalogList from "components/modules/homePage/CatalogList/CatalogList";
import CategoriesList from "components/modules/homePage/CategoriesList/CategoriesList";
import ResetPasswordForm from "components/modules/auth/resetPassword/resetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  const { showResetPasswordForm, onShowResetPasswordForm } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onShowResetPasswordForm();
  }, [onShowResetPasswordForm]);

  if (!showResetPasswordForm) navigate(NAV_URL.HOME_PAGE);

  return (
    <main className="main">
      <Slider />
      <CategoriesList />

      <div className="container">
        <CatalogList />
      </div>

      {showResetPasswordForm && <ResetPasswordForm />}
    </main>
  );
}
