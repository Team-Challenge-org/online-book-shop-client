import styles from "./CatalogCategoriesList.module.scss";

import type { TCategory } from "store/categories/types";

import { NAV_URL } from "constants/global";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "store/categories/selectors";
import { setCategory } from "store/categories/categoriesSlice";
import { closeCategoriesSidebar } from "store/catalog/catalogSlice";

export function CatalogCategoriesList() {
  const dispatch = useDispatch();
  const { items: categories } = useSelector(selectCategories);

  function navigateToCatalogPage(category: TCategory) {
    const jsonCategory = JSON.stringify(category);
    localStorage.setItem("category", jsonCategory);

    dispatch(setCategory(category));
    dispatch(closeCategoriesSidebar());

    navigate(NAV_URL.CATALOG_PAGE);
  }

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
