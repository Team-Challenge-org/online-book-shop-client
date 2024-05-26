import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
