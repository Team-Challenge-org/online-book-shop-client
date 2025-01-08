import FilterCheckboxes from "./filterCheckboxes/FilterCheckboxes";
import dandruffIcon from "components/../../public/img/dandruff.svg";

import styles from "./containerFilterInput.module.scss";
import { useState } from "react";

interface ContainerFilterInputProps {
  title: string;
  items: string[];
}

export default function ContainerFilterInput({ title, items }: ContainerFilterInputProps) {
  const [searchItem, setSearchItem] = useState("");

  const filteredItems = items.filter((item) => item.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div className={styles.filter}>
      <p className={styles.filter_title}>{title}</p>

      <div className={styles.filter_input}>
        <input
          type="text"
          placeholder="Введіть автора"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <img src={dandruffIcon} alt="Dandruff" />
      </div>

      <FilterCheckboxes typeOfFilters={title} className={styles.filter_checkboxes} items={filteredItems} />
    </div>
  );
}
