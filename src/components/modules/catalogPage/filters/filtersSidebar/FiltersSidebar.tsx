import styles from "./FiltersSidebar.module.scss";

export function FiltersSidebar() {
  return (
    <aside className={styles.filtersSidebar}>
      фильтры
      {/* TODO: создать компонент  filterSection > filterTitle, filterList, filterInput */}
      <button className={styles.applyBtn}>Застосувати</button>
    </aside>
  );
}
