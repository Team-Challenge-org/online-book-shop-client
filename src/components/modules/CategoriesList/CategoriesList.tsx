import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCategories } from 'store/categories/asyncAction';
import { selectCategories } from 'store/categories/selectors';
import { setCategory } from 'store/categories/slice';
import { useAppDispatch } from 'store/store';
import styles from 'styles/categoriesList/index.module.scss';

const CategoriesList = () => {
  const { items } = useSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCategories = async () => {
      dispatch(fetchCategories());
    };

    getCategories();
  }, [dispatch]);

  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>
        {items.map((item) => (
          <li
            className={styles.categories__list__item}
            key={item.id}
            onClick={() => dispatch(setCategory(item))}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
