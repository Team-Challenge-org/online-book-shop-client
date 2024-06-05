import styles from 'styles/catalogItem/index.module.scss';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';
import { selectCart } from 'store/cart/selectors';
import { fetchBooks } from 'store/books/asyncActions';
import { selectBookData } from 'store/books/selectors';
import { selectFavorite } from 'store/favorite/selectors';
import { selectCategory } from 'store/categories/selectors';
import CatalogItem from 'components/modules/CatalogList/CatalogItem';

const CatalogList = () => {
  const { books } = useSelector(selectBookData);
  const { items: cartItems } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);
  const category = useSelector(selectCategory);

  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const jsonCart = JSON.stringify(cartItems);
      localStorage.setItem('cart', jsonCart);

      const jsonFavorite = JSON.stringify(favoriteItems);
      localStorage.setItem('favorite', jsonFavorite);

      const jsonCategory = JSON.stringify(category);
      localStorage.setItem('category', jsonCategory);
    }
    isMounted.current = true;
  }, [cartItems, favoriteItems, category]);

  useEffect(() => {
    const getBooks = async () => {
      dispatch(fetchBooks());
    };

    getBooks();
  }, [dispatch]);

  const renderedItems = books.map((item) => <CatalogItem item={item} key={item.id} />).slice(0, 10);

  const filteredItems = books
    .filter((item) => item.category === category.name)
    .map((item) => <CatalogItem item={item} key={item.id} />)
    .slice(0, 10);

    <section className={styles.catalog}>
      {filteredItems.length > 0 ? filteredItems : renderedItems}
    </section>

  );
};

export default CatalogList;
