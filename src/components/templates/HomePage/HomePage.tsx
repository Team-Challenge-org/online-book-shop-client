import SliderPage from "components/assets/Slider/Slider";
import CategoriesList from "components/modules/CategoriesList/CategoriesList";
import BooksListTop from "components/modules/BooksList/BooksListTop";
import BooksListBottom from "components/modules/BooksList/BooksListBottom";
import Footer from "components/modules/Footer/Footer";
import Header from "components/modules/Header/Header";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <SliderPage />
      <CategoriesList />
      <BooksListTop />
      <BooksListBottom />
      <div className="main"></div>
      <Footer />
    </div>
  );
};

export default HomePage;
