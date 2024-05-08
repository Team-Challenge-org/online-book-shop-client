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
          type="text"
          placeholder="Ваша електронна адреса"
          className={styles.footer__subscribe__form__input}
        />
        <button className={styles.footer__subscribe__form__button}>Підписатись</button>
      </form>
    </div>
  );
};

export default Subscribe;
