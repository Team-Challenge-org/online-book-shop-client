import { NAV_URL } from "constants/global";
import { useAuth } from "pages/AuthContext";
import { useNavigate } from "react-router-dom";
import Slider from "components/assets/Slider/Slider";
import CatalogList from "components/modules/CatalogList/CatalogList";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";
import ResetPasswordForm from "components/modules/auth/resetPassword/resetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  const { showResetPasswordForm } = useAuth();
  const navigate = useNavigate();

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
