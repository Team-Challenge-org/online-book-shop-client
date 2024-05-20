import SliderPage from 'components/assets/Slider/Slider';
import CategoriesList from 'components/modules/CategoriesList/CategoriesList';
import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';
import CatalogItem from 'components/modules/ItemPage/CatalogItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from 'store/book/asyncActions';
import { selectBookData } from 'store/book/selectors';
import { useAppDispatch } from 'store/store';

const HomePage = () => {
  const { items } = useSelector(selectBookData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }, [items]);

  useEffect(() => {
    const getBooks = async () => {
      dispatch(fetchBooks());
    };

    getBooks();
  }, [dispatch]);

  const renderedItems = items.slice(0, 10).map((item) => <CatalogItem item={item} key={item.id} />);

  return (
    <div className="container">
      <Header />
      <SliderPage />
      <div className="main">
        <CategoriesList />
        {/*<div className="test">{renderedItems}</div>*/}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
