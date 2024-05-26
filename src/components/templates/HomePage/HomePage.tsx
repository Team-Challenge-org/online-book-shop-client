import Slider from 'components/assets/Slider/Slider';
import CategoriesList from 'components/modules/CategoriesList/CategoriesList';
import CatalogList from 'components/modules/CatalogList/CatalogList';

const HomePage = () => {
  return (
    <div className="main">
      <Slider />
      <CategoriesList />
      <CatalogList />
    </div>
  );
};

export default HomePage;
