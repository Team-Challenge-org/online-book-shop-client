import MainLayout from 'components/layouts/MainLayout';
import NotFoundPage from 'pages/ErrorPage/NotFoundPage';
import ServiceUnavailablePage from 'pages/ErrorPage/ServiceUnavailablePage';
import HomePage from 'pages/HomePage/HomePage';
import OrderPage from 'pages/OrderPage/OrderPage';
import ProductPage from 'pages/ProductPage/ProductPage';


import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/book/:id" element={<ProductPage />} />
        <Route path="/reset_password" element={<ResetPasswordPage />} />

        {/* Errors: */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/503" element={<ServiceUnavailablePage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

        <Route path='/order' element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
