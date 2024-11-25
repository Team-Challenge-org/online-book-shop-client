import { useState, useEffect } from "react";
import FilterCheckbox from "../../filterCheckbox/FilterCheckbox";
import arrowBottom from "components/../../public/img/arrowBottom.svg";

import styles from "./filterCheckboxes.module.scss";

interface FilterCheckboxesProps {
  items: string[];
  className: string;
  typeOfFilters: string;
}

export default function FilterCheckboxes({ items, className, typeOfFilters }: FilterCheckboxesProps) {
  const [stateOfItems, setStateOfItems] = useState(items.length > 5 ? true : false);

  const visibleItems = stateOfItems ? items.slice(0, 5) : items;

  return (
    <div className={className}>
      {visibleItems.map((item) => (
        <FilterCheckbox typeOfFilters={typeOfFilters} key={item} name={item} />
      ))}

      {items.length > 5 ? (
        stateOfItems ? (
          <div className={styles.more}>
            <p onClick={() => setStateOfItems((prevState) => !prevState)}>Показати більше</p>
            <img src={arrowBottom} alt="Arrow" className={styles.more_arrow} />
          </div>
        ) : (
          <div className={styles.more}>
            <p onClick={() => setStateOfItems((prevState) => !prevState)}>Показати менше</p>
            <img src={arrowBottom} alt="Arrow" className={`${styles.more_arrow} ${styles.active}`} />
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
}
