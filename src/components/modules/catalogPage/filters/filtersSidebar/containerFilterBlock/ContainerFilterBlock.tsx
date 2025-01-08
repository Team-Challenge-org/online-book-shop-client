import FilterCheckbox from "../filterCheckbox/FilterCheckbox";
import styles from "./ContainerFilterBlock.module.scss";

type Filter = {
  title: string;
  filterName: string;
};

interface ContainerFilterBlockProps {
  title: string;
  filters: Filter[];
}

export default function ContainerFilterBlock({ title, filters }: ContainerFilterBlockProps) {
  return (
    <div className={styles.filter}>
      <p className={styles.filter_title}>{title}</p>

      <ul>
        {filters.map((filter) => (
          <FilterCheckbox
            key={filter.title}
            typeOfFilters={title}
            filterName={filter.filterName}
            name={filter.title}
          />
        ))}
      </ul>
    </div>
  );
}
