import Slider from "components/assets/Slider/Slider";
import CatalogList from "components/modules/CatalogList/CatalogList";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";

const HomePage = () => {
  return (
    <main className="main">
      <Slider />
      <CategoriesList />

      <div className="container">
        <CatalogList />
      </div>
    </main>
  );
};

export default HomePage;
