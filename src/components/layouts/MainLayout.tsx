import { Outlet } from "react-router-dom";
import Footer from "components/modules/Footer/Footer";
import Header from "components/modules/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
