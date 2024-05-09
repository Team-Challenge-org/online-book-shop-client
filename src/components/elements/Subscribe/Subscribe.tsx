import styles from 'styles/footer/index.module.scss';

const Subscribe = () => {
  return (
    <div className={styles.footer__subscribe}>
      <h1 className={styles.footer__subscribe__title}>Підпишіться на розсилку</h1>
      <span className={styles.footer__subscribe__text}>
        Дізнавайтесь першими про нові книги та спецпропозиції від магазину TCL{' '}
      </span>
      <form className={styles.footer__subscribe__form}>
        <input
          type="email"
          placeholder="Ваша електронна адреса"
          className={styles.footer__subscribe__form__input}
          required
        />
        <button className={styles.footer__subscribe__form__button} type="submit">
          Підписатись
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
