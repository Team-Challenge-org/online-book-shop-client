import SliderPage from 'components/assets/Slider/Slider';
import CategoriesList from 'components/modules/CategoriesList/CategoriesList';
import Footer from 'components/modules/Footer/Footer';
import Header from 'components/modules/Header/Header';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from 'store/book/asyncActions';
import { selectBookData } from 'store/book/selectors';
import { selectCart } from 'store/cart/selectors';
import { addItem, removeItem } from 'store/cart/slice';
import { CartItems } from 'store/cart/types';
import { useAppDispatch } from 'store/store';

const HomePage = () => {
  const { items } = useSelector(selectBookData);
  const { items: cartItems } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getBooks = async () => {
      dispatch(fetchBooks());
    };

    getBooks();
  }, [dispatch]);

  const cartItemsHandler = (obj: CartItems) => {
    //if (cartItems.find((item) => item.index === obj.index)) {
    //  removeItem(obj);
    //} else {
    //  addItem(obj);
    //}

    dispatch(addItem(obj));
    console.log(cartItems);
  };

  const renderedItems = items.slice(0, 10).map((item) => (
    <li className="test__li" key={item.index}>
      <img src={item.picture} alt={item.name} width="302px" height="368px" />
      <span>Автор: {item.author}</span>
      <span>Назва: {item.name}</span>
      <span>{item.price} грн.</span>
      <button onClick={() => cartItemsHandler(item)}>Add to cart</button>
      <button>Add to favorite</button>
    </li>
  ));

  return (
    <div className="container">
      <Header />
      <SliderPage />
      <div className="main">
        <CategoriesList />
        <div className="test">{renderedItems}</div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
