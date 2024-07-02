import { Outlet } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";
import Footer from "components/modules/Footer/Footer";
import Header from "components/modules/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Header />
      </AuthProvider>

      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
