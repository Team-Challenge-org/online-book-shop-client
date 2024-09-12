import MainLayout from 'components/layouts/MainLayout';
import { CatalogPage } from 'pages/catalogPage/CatalogPage';
import NotFoundPage from 'pages/ErrorPage/NotFoundPage';
import ServiceUnavailablePage from 'pages/ErrorPage/ServiceUnavailablePage';
import HomePage from 'pages/HomePage/HomePage';
import OrderPage from 'pages/OrderPage/OrderPage';
import PaymentPage from 'pages/PaymentPage/PaymentPage';
import PrivacyPage from 'pages/PrivacyPage/PrivacyPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import ResetPasswordPage from 'pages/resetPasswordPage/ResetPasswordPage';

import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<HomePage />} />
        <Route path='/book/:id' element={<ProductPage />} />
        <Route path='/reset_password' element={<ResetPasswordPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/catalog' element={<CatalogPage />} />

        {/* Errors: */}
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='/503' element={<ServiceUnavailablePage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />

        {/* Static pages */}
        <Route path='/privacy' element={<PrivacyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
