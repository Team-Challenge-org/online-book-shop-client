import { useSelector } from "react-redux";
import { selectFilters } from "store/filters/selectors";

import ContainerFilterBlock from "./containerFilterBlock/ContainerFilterBlock";
import ContainerFilterInput from "./containerFilterInput/ContainerFilterInput";
import FilterPrice from "./filterPrice/FilterPrice";
import { useAppDispatch } from "store/store";
import { setFilterIsActive } from "store/filters/filters";

import styles from "./FiltersSidebar.module.scss";

export function FiltersSidebar() {
  const dispatch = useAppDispatch();

  return (
    <aside className={styles.filtersSidebar}>
      <ContainerFilterBlock
        title="Наявність"
        filters={[
          { title: "В наявності", filterName: "In stock" },
          { title: "Всі", filterName: "All" },
        ]}
      />
      <ContainerFilterBlock
        title="Тип книги"
        filters={[
          { title: "Паперова", filterName: "Paper" },
          { title: "Електронна", filterName: "Electronic" },
        ]}
      />
      <ContainerFilterBlock
        title="Мова"
        filters={[
          { title: "Українська", filterName: "Українська" },
          { title: "Англійська", filterName: "Англійська" },
          { title: "Іспанська", filterName: "Іспанська" },
          { title: "Італійська", filterName: "Італійська" },
          { title: "Німецька", filterName: "Німецька" },
          { title: "Французька", filterName: "Французька" },
          { title: "Турецька", filterName: "Турецька" },
          { title: "Іврит", filterName: "Іврит" },
          { title: "Чеська", filterName: "Чеська" },
          { title: "Польська", filterName: "Польська" },
        ]}
      />
      <ContainerFilterInput
        title="Автор"
        items={["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"]}
      />
      <ContainerFilterInput
        title="Видавництво"
        items={["Publisher A", "Publisher B", "Publisher C", "Publisher D"]}
      />
      <ContainerFilterBlock
        title="Тип обкладинки"
        filters={[
          { title: "Тверда", filterName: "Hardcover" },
          { title: "М'яка", filterName: "Softcover" },
        ]}
      />

      <FilterPrice />

      <button className={styles.applyBtn} onClick={() => dispatch(setFilterIsActive(true))}>
        Застосувати
      </button>
    </aside>
  );
}
