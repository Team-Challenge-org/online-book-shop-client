import ContainerFilterBlock from "./containerFilterBlock/ContainerFilterBlock";
import ContainerFilterInput from "./containerFilterInput/ContainerFilterInput";
import FilterPrice from "./filterPrice/FilterPrice";

import styles from "./FiltersSidebar.module.scss";

export function FiltersSidebar() {
  return (
    <aside className={styles.filtersSidebar}>
      <ContainerFilterBlock title="Наявність" filters={["В наявності", "Всі"]} />
      <ContainerFilterBlock title="Тип книги" filters={["Паперова", "Електронна"]} />
      <ContainerFilterBlock
        title="Мова"
        filters={[
          "Українська",
          "Англійська",
          "Іспанська",
          "Італійська",
          "Німецька",
          "Французька",
          "Турецька",
          "Іврит",
          "Чеська",
          "Польська",
        ]}
      />
      <ContainerFilterInput
        title="Автор"
        items={[
          "React",
          "TypeScript",
          "JavaScript",
          "Ім'я автора",
          "Ім'я автора",
          "Ім'я автора",
          // "Ім'я автора",
        ]}
      />
      <ContainerFilterInput
        title="Видавництво"
        items={[
          "Ruby",
          "Java",
          "C#",
          "Назва видавництва",
          "Назва видавництва",
          "Назва видавництва",
          "Назва видавництва",
        ]}
      />
      <ContainerFilterBlock title="Тип обкладинки" filters={["Тверда", "М'яка"]} />

      <FilterPrice />

      {/* TODO: создать компонент  filterSection > filterTitle, filterList, filterInput */}
      <button className={styles.applyBtn}>Застосувати</button>
    </aside>
  );
}
