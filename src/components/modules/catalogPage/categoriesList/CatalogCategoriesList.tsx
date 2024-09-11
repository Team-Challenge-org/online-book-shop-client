import styles from "./CatalogCategoriesList.module.scss";

import { NAV_URL } from "constants/global";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectCategory } from "store/categories/selectors";
import { closeCategoriesSidebar } from "store/catalog/catalogSlice";
import { setCategory } from "store/categories/categoriesSlice";
import { TCategory } from "store/categories/types";

export function CatalogCategoriesList() {
  const dispatch = useDispatch();
  const { items: categories } = useSelector(selectCategories);
  const selectedCategory = useSelector(selectCategory);

  function navigateToCatalogPage(category: TCategory) {
    navigate(NAV_URL.CATALOG_PAGE);
    dispatch(setCategory(category));
    dispatch(closeCategoriesSidebar());
    
  }



  //TODO: по нажатию мы фильтруем по setCategory(id)
  // Полученые книги selectBooks, фильтруем в новый массив
  const navigate = useNavigate();
  return (
    <ul className={styles.category_list}>
      {categories.map((category) => (
        <li
          key={category.id}
          className={styles.category_name}
          onClick={() => navigateToCatalogPage(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
