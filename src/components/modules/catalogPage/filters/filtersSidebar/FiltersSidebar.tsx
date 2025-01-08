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
          { title: "Українська", filterName: "Ukrainian" },
          { title: "Англійська", filterName: "English" },
          { title: "Іспанська", filterName: "Spanish" },
          { title: "Італійська", filterName: "Italian" },
          { title: "Німецька", filterName: "German" },
          { title: "Французька", filterName: "French" },
          { title: "Турецька", filterName: "Turkish" },
          { title: "Іврит", filterName: "Hebrew" },
          { title: "Чеська", filterName: "Czech" },
          { title: "Польська", filterName: "Polish" },
        ]}
      />
      <ContainerFilterInput title="Автор" items={["John Doe", "Andrey Kurkov", "Люсія Бондарь", "Michael Brown"]} />
      <ContainerFilterInput
        title="Видавництво"
        items={["КСД ", "Hachette Livre ", "Macmillan Publishers", "Amazing Publisher", "Hachette Livrer"]}
      />
      <ContainerFilterBlock
        title="Тип обкладинки"
        filters={[
          { title: "Тверда", filterName: "Hardcover" },
          { title: "М'яка", filterName: "Papercover" },
        ]}
      />

      <FilterPrice />

      <button className={styles.applyBtn} onClick={() => dispatch(setFilterIsActive(true))}>
        Застосувати
      </button>
    </aside>
  );
}
