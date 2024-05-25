import React from 'react';
import styles from 'styles/productPage/index.module.scss';

const ProductPage = () => {
  return (
    <div className={styles.product}>
      <span className={styles.product__bread}>
        Головна / Дизайн / ILLUSTRATION in Ukraine. Ілюстрація в Україні
      </span>
      <div className={styles.product__main}>
        <div className={styles.product__main__slider}>
          <img src="./img/book.png" alt="" />
        </div>
        <div className={styles.product__main__item}>
          <div className={styles.product__main__item__header}>
            <span className={styles.product__main__item__header__author}>Люсія Бондар</span>
            <span className={styles.product__main__item__header__quantity}>В наявності</span>
          </div>
          <span className={styles.product__main__item__title}>
            ILLUSTRATION in Ukraine. Ілюстрація в Україні
          </span>
          <span className={styles.product__main__item__price}>1950 грн</span>
          <span className={styles.product__main__item__text}>
            Видавництво CP PUBLISHING випустило першу книгу в Україні про сучасну ілюстрацію
            – «ILLUSTRATION in Ukraine».  Книга являє собою захопливе видання у твердій обкладинці,
            створене разом із клубом ілюстраторів PICTORIC. На її понад 200 сторінках, які
            виготовлені із екологічного паперу Arctic Paper, висвітлено яскраві, оригінальні
            ілюстрації від 30 найталановитіших українських митців.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
