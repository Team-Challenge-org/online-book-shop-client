import React, { useEffect, useState } from "react";
import { CatalogBook } from "../catalogBook/CatalogBook";

import { useFilters } from "hooks/useFilters";

import type { TCatalogBook } from "store/catalog/types";
import { useSelector } from "react-redux";
import { selectFilters } from "store/filters/selectors";

const BookGrid = ({ filteredByCategory }: { filteredByCategory: TCatalogBook[] }) => {
  const [filteredArray, setFilteredArray] = useState(filteredByCategory);
  // console.log('filteredArray: ', filteredArray)
  const { filter } = useFilters(filteredByCategory);
  const { filterIsActive } = useSelector(selectFilters);
  // console.log('filterIsActive: ', filterIsActive)

  useEffect(() => {
    if (filterIsActive) {
      setFilteredArray(filter());
    }
  }, [filterIsActive, setFilteredArray, filteredByCategory]);

  return (
    <>
      {filteredArray.map((item: any) => (
        <CatalogBook key={item.id} book={item as TCatalogBook} />
      ))}
    </>
  );
};

export default BookGrid;
