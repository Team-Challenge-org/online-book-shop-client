import FilterCheckbox from "../filterCheckbox/FilterCheckbox";
import styles from "./ContainerFilterBlock.module.scss";

interface ContainerFilterBlockProps {
  title: string;
  filters: string[];
}

export default function ContainerFilterBlock({ title, filters }: ContainerFilterBlockProps) {
  return (
    <div className={styles.filter}>
      <p className={styles.filter_title}>{title}</p>

      <ul>
        {filters.map((filter) => (
          <FilterCheckbox key={filter} typeOfFilters={title} name={filter} />
        ))}
      </ul>
    </div>
  );
}
