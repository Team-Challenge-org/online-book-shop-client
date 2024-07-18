import Slider from "components/assets/Slider/Slider";
import CatalogList from "components/modules/CatalogList/CatalogList";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";
import ResetPasswordForm from "components/modules/auth/resetPassword/resetPasswordForm/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <main className="main">
      <Slider />
      <CategoriesList />
      <div className="container">
        <CatalogList />
      </div>

      <ResetPasswordForm />
    </main>
  );
}
