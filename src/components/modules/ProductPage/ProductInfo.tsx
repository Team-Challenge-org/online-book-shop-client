import styles from 'styles/productInfo/index.module.scss';

import type { TBook } from 'store/books/types';
import type { TCartItem } from 'store/cart/types';
import type { TFavoriteItems } from 'store/favorite/types';
import type { TDropdownCharacteristicsType } from 'types/common';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';
import React, { useEffect, useState } from 'react';
import { addItemToCart } from 'store/cart/cartSlice';
import { SliderImage } from './imageSlider/SliderImage';
import { useModalCart } from 'contexts/ModalCartContext';
import { useNavigate, useParams } from 'react-router-dom';
import { selectOneFavorite } from 'store/favorite/selectors';
import { Breadcrumbs } from 'components/elements/Breadcrumbs/Breadcrumbs';
import { DropdownItem } from 'components/modules/ProductPage/DropdownItem';
import { addOrRemoveFavoriteItem } from 'store/favorite/favoriteSlice';
import { Endpoints } from 'constants/api';
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

export const ProductInfo = () => {
  const [book, setBook] = useState<TBook>({
    id: 0,
  title: '',
  full_description: '',
  short_description: '',
  price: 0,
  category: '',
  isThisNotSlider: true,
  available: '',
  authors: null,
  titleImage: null,
  timeAdded: '',
  images: [''],
  quantity: 0
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorite = useSelector(selectOneFavorite(book!))
  const { onOpenCartModal } = useModalCart();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(Endpoints.GET_BOOK_BY_ID + id);
        setBook(data);
      } catch (error) {
        alert('Помилка при загрузці книги');
        navigate('/');
      }
    }
    fetchBook();
    window.scrollTo(0, 0); //show upper part of page
  }, [id, navigate]);


  const cartItemHandler = (obj: TCartItem) => {
    dispatch(addItemToCart(obj));
    onOpenCartModal();
  };

  const favoriteItemsHandler = (obj: TFavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
  };

  const characteristics: TDropdownCharacteristicsType = {
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


  return (
    <section className={styles.product}>
      <Breadcrumbs book={book} />

      <div className={styles.product__main}>
        <div className={styles.product__main__slider}>
          {book.images.length > 1 ? (
            <SliderImage images={book.images} />
          ) : (
            <img
              src={book.images[0]}
              alt={book.title}
              className={styles.product__main__slider__image}
            />
          )}
        </div>

        <div className={styles.product__main__item}>
          <div className={styles.product__main__item__header}>
            <span className={styles.product__main__item__header__author}>{book.authors}</span>
            <span className={styles.product__main__item__header__quantity}>
              {book.quantity > 0 ? 'В наявності' : 'Немає в наявності'}
            </span>
          </div>
          <h1 className={styles.product__main__item__title}>{book.title}</h1>
          <span className={styles.product__main__item__price}>{book.price} грн</span>
          <p className={styles.product__main__item__text}>{book.short_description}</p>
          <div className={styles.product__main__item__active}>
            <button
              className={`${styles.product__main__item__active__cart} + button`}
              onClick={() => cartItemHandler(book)}>
              Додати у кошик
            </button>
            <button
              className={styles.product__main__item__active__favorite}
              onClick={() => favoriteItemsHandler(book)}>
              {favorite ? (
                <MdOutlineFavorite color="#196C67" size="28px" />
              ) : (
                <MdFavoriteBorder color="#196C67" size="28px" />
              )}
            </button>
          </div>
          <DropdownItem title="Опис" description={book.full_description} />
          <DropdownItem title="Характеристики" characteristics={characteristics} />
          <DropdownItem title="Оплата, доставка та повернення" order={order} />
        </div>
      </div>
    </section>
  );
};
