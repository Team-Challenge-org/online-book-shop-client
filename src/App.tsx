import MainLayout from 'components/layouts/MainLayout';
import NotFoundPage from 'pages/ErrorPage/NotFoundPage';
import ServiceUnavailablePage from 'pages/ErrorPage/ServiceUnavailablePage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPageLogic from 'pages/LoginPage/LoginPageLogic';
import LogoutPageLogic from 'pages/LoginPage/LogoutPageLogic';
import ProductPage from 'pages/ProductPage/ProductPage';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectAuthData } from 'store/user/selectors';

function App() {
  const auth = useSelector(selectAuthData);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/book/:id" element={<ProductPage />} />
        <Route path="/login" element={auth ? <Navigate to="/logout" /> : <LoginPageLogic />} />
        <Route path="/logout" element={auth ? <LogoutPageLogic /> : <Navigate to="/login" />} />

        {/* Errors: */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/503" element={<ServiceUnavailablePage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
