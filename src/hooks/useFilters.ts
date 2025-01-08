import { useCallback } from "react";
import { useSelector } from "react-redux";

import { selectFilters } from "store/filters/selectors";

import type { TCatalogBook } from "store/catalog/types";

export const useFilters = (books: Array<TCatalogBook>) => {
  const filters = useSelector(selectFilters);
  console.log("filters: ", filters);

  const applyFilter = (array: TCatalogBook[], condition: (book: TCatalogBook) => boolean) => array.filter(condition);

  const filter = useCallback(() => {
    let result = [...books];

    // Фільтри для наявності
    if (filters.availability.length > 0) {
      if (filters.availability.includes("All")) {
        result = [...books];
      } else {
        result = applyFilter(result, (book) => filters.availability.includes(book.available || "In stock"));
      }
    }

    // Фільтри типу книги
    if (filters.typesOfBook.length > 0) {
      result = applyFilter(result, (book) => 
        filters.typesOfBook.includes((book.characteristicDto?.bookType || "").trim())
      );
    }

    // Фільтри мови
    if (filters.languages.length > 0) {
      result = applyFilter(result, (book) => filters.languages.includes(book.characteristicDto?.language || ""));
    }

    // Фільтри авторів
    if (filters.authors.length > 0) {
      result = applyFilter(result, (book) => filters.authors.includes(book.authors || ""));
    }

    // Фільтри за видавництвом
    if (filters.publishingHouse.length > 0) {
      console.log("publishingHouse: ", filters.publishingHouse);
      result = applyFilter(result, (book) => filters.publishingHouse.includes(book.characteristicDto?.publisher || ""));
    }

    // Фільтри типу обкладинки
    if (filters.typesOfCover.length > 0) {
      result = applyFilter(result, (book) => filters.typesOfCover.includes(book.characteristicDto?.coverType || ""));
    }

    // Фільтри прайсу
    if (filters.prices.min && filters.prices.max !== "0") {
      result = applyFilter(
        result,
        (book) => book.price >= Number(filters.prices.min) && book.price <= Number(filters.prices.max)
      );
    }

    return result;
  }, [books, filters]);

  return { filter };
};
