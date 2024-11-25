import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { fetchBooks } from "store/books/asyncActions";
import { selectBookData } from "store/books/selectors";
import { selectFilters } from "store/filters/selectors";
import { CatalogBook } from "../catalogBook/CatalogBook";
import { selectCategory } from "store/categories/selectors";
import { FiltersSidebar } from "../filters/filtersSidebar/FiltersSidebar";

import styles from "./Catalog.module.scss";

import type { TCatalogBook } from "store/catalog/types";

export function Catalog() {
  const filters = useSelector(selectFilters);
  console.table(filters);
  console.table(filters.prices);
  const selectedCategory = useSelector(selectCategory);
  const { books } = useSelector(selectBookData);
  console.log(books);
  const dispatch = useAppDispatch();

  const filteredBooks = books.filter((book) => book.category === selectedCategory.name);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
