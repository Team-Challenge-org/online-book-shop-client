import MainLayout from 'components/layouts/MainLayout';
import HomePage from 'pages/HomePage/HomePage';
import ProductPage from 'pages/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="book/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
