import React, { useEffect, useState } from "react";
import styles from "styles/productPage/index.module.scss";
import { DropdownCharacteristicsType } from "types/common";
import { Book } from "store/book/types";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "store/store";
import { useSelector } from "react-redux";
import { selectCart } from "store/cart/selectors";
import { selectFavorite } from "store/favorite/selectors";
import { addOrRemoveCartItem } from "store/cart/slice";
import { addOrRemoveFavoriteItem } from "store/favorite/slice";
import { FavoriteItems } from "store/favorite/types";
import { CartItem } from "store/cart/types";
import DropdownItem from "components/modules/ProductPage/DropdownItem";
import FavoriteInProductInactiveSvg from "components/elements/FavoriteInProductInactiveSvg/FavoriteInProductInactiveSvg";

const ProductPage = () => {
  const [book, setBook] = useState<Book>();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const { items: CartItem } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(
          `https://quiet-ocean-77925-b4d85148e93b.herokuapp.com/api/v1/book/findById/${id}`
        );
        setBook(data);
      } catch (error) {
        alert("Помилка при загрузці книги");
        navigate("/");
      }
    }
    fetchBook();
  }, [id, navigate]);

  useEffect(() => {
    if (CartItem.length > 0) {
      let checkCart = CartItem.find((obj) => obj.id === book?.id);
      if (checkCart) {
        setIsAddedToCart(true);
      }
    }

    if (favoriteItems.length > 0) {
      let checkFavorite = favoriteItems.find((obj) => obj.id === book?.id);
      if (checkFavorite) {
        setIsAddedToFavorite(true);
      }
    }
  }, [CartItem, favoriteItems, book, dispatch]);

  const cartItemHandler = (obj: CartItem) => {
    dispatch(addOrRemoveCartItem(obj));
    setIsAddedToCart(!isAddedToCart);
  };

  const favoriteItemsHandler = (obj: FavoriteItems) => {
    dispatch(addOrRemoveFavoriteItem(obj));
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  const characteristics: DropdownCharacteristicsType = {
    publishing: "CP Publishing",
    language: "Українська, Англійська",
    cover: "Тверда",
    pages: 208,
    format: "230х310 мм",
    isbn: "978-617-95044-3-3",
    paper: "Крейдований",
    illustrations: "Кольорові",
    type: "Паперова",
  };

  const order = [
    "Термін обробки та відправки замовлень складає 1-5 робочих днів.",
    "Способи оплати: банківською карткою або готівкою (під час отримання).",
    `Способи доставки: «Нова пошта»(відділення/кур'єрська доставка), «Укрпошта» (на відділення по Україні/ за кордон).`,
    'Правила повернення: повернення товару здійснюється протягом 14 днів з дня отримання згідно Закону України "Про захист прав споживачів".',
  ];

  if (!book) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className="container">
      <div className="main">
        <div className={styles.product}>
          <span className={styles.product__bread}>
            Головна / Дизайн / {book.title}
          </span>
          <div className={styles.product__main}>
            <div className={styles.product__main__slider}>
              <img
                src={book.titleImage!}
                alt={book.title}
                className={styles.product__main__slider__image}
              />
            </div>
            <div className={styles.product__main__item}>
              <div className={styles.product__main__item__header}>
                <span className={styles.product__main__item__header__author}>
                  {book.authors}
                </span>
                <span className={styles.product__main__item__header__quantity}>
                  {book.available ? "В наявності" : "Немає в наявності"}
                </span>
              </div>
              <span className={styles.product__main__item__title}>
                {book.title}
              </span>
              <span className={styles.product__main__item__price}>
                {book.price} грн
              </span>
              <span className={styles.product__main__item__text}>
                {book.short_description}
              </span>
              <div className={styles.product__main__item__active}>
                <button
                  className={`${styles.product__main__item__active__cart} + button`}
                  onClick={() => cartItemHandler(book)}
                >
                  Додати у кошик
                </button>
                <button
                  className={styles.product__main__item__active__favorite}
                  onClick={() => favoriteItemsHandler(book)}
                >
                  <FavoriteInProductInactiveSvg isAdded={isAddedToFavorite} />
                </button>
              </div>
              <DropdownItem title="Опис" description={book.full_description} />
              <DropdownItem
                title="Характеристики"
                characteristics={characteristics}
              />
              <DropdownItem
                title="Оплата, доставка та повернення"
                order={order}
              />
            </div>
          </div>
          <div className={styles.product__dashed}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
