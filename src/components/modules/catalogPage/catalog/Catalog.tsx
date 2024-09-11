import styles from "./Catalog.module.scss";

import { useSelector } from "react-redux";
import { BookCard } from "../bookCard/BookCard";
import { selectCategory } from "store/categories/selectors";

export function Catalog() {
  const selectedCategory = useSelector(selectCategory);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>
        {selectedCategory?.name}
        <span>(сумма книг в категории)</span>
      </h1>

      {/* Catalog */}
      <div className={styles.catalogBox}>
        {/*TODO: Вынести отдельно в компонент сайдбар с фильтрами  */}
        <aside className={styles.filtersSidebar}>
          filters
          <button className={styles.applyBtn}>Застосувати</button>
        </aside>

        {/*TODO: Вынести отдельно в компонент сетка книг  */}
        <div className={styles.bookGrid}>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  );
}
