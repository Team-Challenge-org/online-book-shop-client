import styles from "styles/booksListBottom/index.module.scss";

const BooksListBottom = () => {
  interface Book {
    author: string;
    title: string;
    price: string;
    cover: string;
  }
  const books = [
    {
      author: "Джессіка Ру",
      title: "Флорографія",
      price: "770 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Автор",
      title: "Книга 1",
      price: "350 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Автор",
      title: "Книга 2",
      price: "300 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Автор",
      title: "Книга 3",
      price: "400 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Автор",
      title: "Книга 4",
      price: "450 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Генрі Керол",
      title: "Як знімати неймовірні пейзажі",
      price: "100 грн",
      cover: require("./image-110.png"),
    },
    {
      author: "Майкл Меттс, Енді Велф",
      title: "Письмо - це дизайн",
      price: "530 грн",
      cover: require("./image-111.png"),
    },
    {
      author: "С’юзан Нейпір",
      title: "Дивовижний світ Хаяо Міядзакі",
      price: "370 грн",
      cover: require("./image-112.png"),
    },
    {
      author: "Річард Вільямс",
      title: "Анімація: посібник з виживання",
      price: "575 грн",
      cover: require("./image-113.png"),
    },
    {
      author: "Люсія Бондар",
      title: "Illustration in Ukraine",
      price: "1950 грн",
      cover: require("./image-114.png"),
    },
  ];

  return (
    <div className={styles.list}>
      {books.slice(5, 10).map((book, index) => (
        <div
          key={index}
          className={`${styles.list__item} ${
            index === 4
              ? styles["list__item--large"]
              : styles["list__item--small"]
          }`}
        >
          <img
            src={book.cover}
            alt={book.title}
            className={styles.list__cover}
          />
          <div className={styles.list__info}>
            <h4 className={styles.list__info__author}>{book.author}</h4>
            <h3 className={styles.list__info__title}>{book.title}</h3>
            <p className={styles.list__info__price}>{book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BooksListBottom;
