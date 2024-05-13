import HomePage from 'components/templates/HomePage/HomePage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from 'store/book/asyncActions';
import { selectBookData } from 'store/book/selectors';
import { useAppDispatch } from 'store/store';

function App() {
  const { items } = useSelector(selectBookData);
  const dispatch = useAppDispatch();

  const getBooks = async () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(items);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
