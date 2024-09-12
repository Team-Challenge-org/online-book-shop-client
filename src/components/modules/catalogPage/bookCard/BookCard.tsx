import styles from "./BookCard.module.scss";

export function BookCard() {
  return (
    <li className={styles.bookCard}>
      <img className={styles.bookImage} src="" alt="" />
      <p className={styles.bookAuthor}>Автор</p>
      <h3 className={styles.bookTitle}>Название книги</h3>
      <p className={styles.bookPrice}>1000 грн</p>
    </li>
  );
}
