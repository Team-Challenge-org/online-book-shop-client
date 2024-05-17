import styles from "styles/booksList/index.module.scss";

const BooksList = () => {
  const books = [
    {
      author: "Автор",
      title: "Велика Книга",
      price: "500 грн",
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
            <h4 className={styles.book__author}>{book.author}</h4>
            <h3 className={styles.books__title}>{book.title}</h3>
            <p className={styles.books__price}>{book.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
