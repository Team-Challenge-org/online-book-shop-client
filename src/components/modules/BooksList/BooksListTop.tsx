import styles from "styles/booksListTop/index.module.scss";

const BooksListTop = () => {
  const books = [
    {
      author: "Джессіка Ру",
      title: "Флорографія",
      price: "770 грн",
      cover: require("./image-104.png"),
    },
    {
      author: "Гілтон Картер",
      title: "Дикі інтер’єри",
      price: "750 грн",
      cover: require("./image-105.png"),
    },
    {
      author: "Сет Годін",
      title: "Це маркетинг",
      price: "470 грн",
      cover: require("./image-106.png"),
    },
    {
      author: "Ліна Костенко",
      title: "Триста поезій",
      price: "350 грн",
      cover: require("./image-107.png"),
    },
    {
      author: "Люсія Бондар",
      title: "Interior Design in Ukraine",
      price: "990 грн",
      cover: require("./image-108.png"),
    },
  ];

  return (
    <div className={styles.books}>
      {books.map((book, index) => (
        <div
          key={index}
          className={`${styles.books__item} ${
            index === 0
              ? styles["books__item--large"]
              : styles["books__item--small"]
          }`}
        >
          <img
            src={book.cover}
            alt={book.title}
            className={styles.books__cover}
          />
          <div className={styles.books__info}>
            <h4 className={styles.books__info__author}>{book.author}</h4>
            <h3 className={styles.books__info__title}>{book.title}</h3>
            <p className={styles.books__info__price}>{book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksListTop;
