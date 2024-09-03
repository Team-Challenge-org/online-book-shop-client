import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";
import Footer from "components/modules/Footer/Footer";
import Header from "components/modules/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Header />

        <Outlet />
      </AuthProvider>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default MainLayout;
