import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import {
  HomePage,
  MainLayout,
  CatalogPage,
  NotFoundPage,
  ServiceUnavailablePage,
  OrderPage,
  PaymentPage,
  PrivacyPage,
  ProductPage,
  ProfilePage,
  ResetPasswordPage,
} from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/book/:id" element={<ProductPage />} />
        <Route path="/reset_password" element={<ResetPasswordPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/catalog" element={<CatalogPage />} />

        {/* Errors: */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/503" element={<ServiceUnavailablePage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

        {/* Static pages */}
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
