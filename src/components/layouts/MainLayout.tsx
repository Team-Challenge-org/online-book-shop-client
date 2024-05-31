import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
