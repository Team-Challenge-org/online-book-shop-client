import styles from 'styles/categoriesList/index.module.scss';

const CategoriesList = () => {
  const cl = [
    'Архітектура',
    'Бізнес і маркетинг',
    'Дизайн',
    'Кулінарія',
    'Кінематограф',
    'Мистецтво',
    'IT, програмування',
    'Мода та краса',
    'Філософія',
    'Психологія',
    'Комікси',
    'Стиль життя',
    'Українські автори',
  ];

  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>
        {cl.map((item, index) => (
          <li className={styles.categories__list__item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
