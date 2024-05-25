import Slider from 'components/assets/Slider/Slider';
import CategoriesList from 'components/modules/CategoriesList/CategoriesList';
import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';
import CatalogList from 'components/modules/CatalogList/CatalogList';
import ProductPage from '../ProductPage/ProductPage';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      {/*<Slider />
      <CategoriesList />
      <div className="main">
        <CatalogList />
      </div>*/}
      <ProductPage />
      <Footer />
    </div>
  );
};

export default HomePage;
