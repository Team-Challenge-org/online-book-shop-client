import FavoriteInProductInactiveSvg from 'components/elements/FavoriteInProductInactiveSvg/FavoriteInProductInactiveSvg';
import React from 'react';
import styles from 'styles/productPage/index.module.scss';
import DropdownItem from './DropdownItem';
import { DropdownCharacteristicsType } from 'types/commont';

const ProductPage = () => {
  const characteristics: DropdownCharacteristicsType = {
    publishing: 'CP Publishing',
    language: 'Українська, Англійська',
    cover: 'Тверда',
    pages: 208,
    format: '230х310 мм',
    isbn: '978-617-95044-3-3',
    paper: 'Крейдований',
    illustrations: 'Кольорові',
    type: 'Паперова',
  };

  const order = [
    'Термін обробки та відправки замовлень складає 1-5 робочих днів.',
    'Способи оплати: банківською карткою або готівкою (під час отримання).',
    `Способи доставки: «Нова пошта»(відділення/кур'єрська доставка), «Укрпошта» (на відділення по Україні/ за кордон).`,
    'Правила повернення: повернення товару здійснюється протягом 14 днів з дня отримання згідно Закону України "Про захист прав споживачів".',
  ];

  const description = `
  Книга «ILLUSTRATION in Ukraine. Ілюстрація в Україні» – унікальна, абсолютно перша
  книга, в якій представлені художні досягнення українських митців – ілюстраторів. Її
  упорядкування здійснено разом із Клубом ілюстраторів Pictoric. Ілюстрація – це не тільки
  і не стільки, в загальноприйнятому розумінні, частина книжки чи проєкту, це художній
  витвір, технічно складний та емоційно забарвлений артоб’єкт. Добірка робіт
  художників-ілюстраторів, що представлена в книжці, – це зріз творчого надбання молодих
  українських талантів. Кожен художник – яскрава особистість зі своїм внутрішнім світом,
  історією, кругозором, джерелами натхнення, техніками та стилями, творчими пошуками.
  Поряд з ілюстраціями в книзі ви знайдете цікаві факти про авторів.`;

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
          <div className={styles.product__main__item__active}>
            <button className={`${styles.product__main__item__active__cart} + button`}>
              Додати у кошик{' '}
            </button>
            <button className={styles.product__main__item__active__favorite}>
              <FavoriteInProductInactiveSvg />
            </button>
          </div>
          <DropdownItem title="Опис" description={description} />
          <DropdownItem title="Характеристики" characteristics={characteristics} />
          <DropdownItem title="Оплата, доставка та повернення" order={order} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
