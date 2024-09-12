import styles from "./Catalog.module.scss";

import type { TCatalogBook } from "store/catalog/types";

import { useSelector } from "react-redux";
import { selectBookData } from "store/books/selectors";
import { CatalogBook } from "../catalogBook/CatalogBook";
import { selectCategory } from "store/categories/selectors";
import { FiltersSidebar } from "../filters/filtersSidebar/FiltersSidebar";

export function Catalog() {
  const selectedCategory = useSelector(selectCategory);
  const { books } = useSelector(selectBookData);

  const filteredBooks = books.filter(
    (book) => book.category === selectedCategory.name
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>
        {selectedCategory?.name}
        <span> ({filteredBooks.length})</span>
      </h1>

      {/* Catalog */}
      <div className={styles.catalogBox}>
        <FiltersSidebar />

        <div className={styles.bookGrid}>
          {(filteredBooks ? filteredBooks : books).map((item) => (
            <CatalogBook key={item.id} book={item as TCatalogBook} />
          ))}
        </div>
      </div>
    </div>
  );
}
