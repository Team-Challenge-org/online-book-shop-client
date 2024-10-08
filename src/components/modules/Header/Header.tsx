import { MdPerson } from "react-icons/md";
import styles from "./header.module.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import Logo from "components/elements/Logo/Logo";
import { MdOutlineSearch } from "react-icons/md";
import ModalUserForm from "../auth/ModalUserForm";
import { MdFavoriteBorder } from "react-icons/md";
import { hideMessage } from "store/auth/authSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useModalCart } from "contexts/ModalCartContext";
import { ModalCart } from "../ModalShoppingCart/ModalCart/ModalCart";
import { selectIsAuth, selectShowMessage } from "store/auth/selectors";
import { EmailCheckerForPasswordResetForm } from "../auth/resetPassword/emailCheckerForm/EmailCheckerForPasswordResetForm";
import { selectCatalogState } from "store/catalog/selectors";
import { CategoriesSidebar } from "../catalogPage/categoriesSidebar/CategoriesSidebar";
import { openCategoriesSidebar } from "store/catalog/catalogSlice";

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();
  const { showRegisterForm, onShowRegisterForm, showEmailCheckerForm } =
    useAuth();
  const { showSidebar } = useSelector(selectCatalogState);

  const dispatch = useDispatch();
  const auth = useSelector(selectIsAuth);
  const { cartItemsCount } = useModalCart();
  const message = useSelector(selectShowMessage);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  useEffect(() => {
    function handleHideMessage() {
      dispatch(hideMessage());
    }

    if (message) {
      setTimeout(handleHideMessage, 5000);
    }
  }, [message, dispatch]);

  return (
    <header className={styles.header}>
      <Logo color={"#000000"} />

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li
            className={styles.header__nav__list__item}
            onClick={() => dispatch(openCategoriesSidebar())}
          >
            Каталог
          </li>
          <li className={styles.header__nav__list__item}>Оплата та доставка</li>
          <li className={styles.header__nav__list__item}>Про нас</li>
        </ul>
      </nav>

      <div className={styles.header__right}>
        <form className={styles.header__right__form}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.header__right__form__input}
          />
          <MdOutlineSearch className={styles.header__right__form__icon} />
        </form>

        <div className={styles.header__right__actions}>
          {message && (
            <div className={styles.header__right__actions__message}>
              <span className={styles.header__right__actions__message__title}>
                Вітаємо,
                <span
                  className={
                    styles.header__right__actions__message__title_italic
                  }
                >
                  Ім’я
                </span>
                !
              </span>
              <span className={styles.header__right__actions__message__text}>
                Ви успішно зареєструвались!
              </span>
            </div>
          )}

          <span className={styles.header__right__actions__switch}>
            <span>UA </span>/ EN
          </span>

          {isAuth ? (
            <Link to="/profile?element=favorites">
              <MdFavoriteBorder className={styles.nav_icon} />
            </Link>
          ) : (
            <MdFavoriteBorder
              className={styles.nav_icon}
              onClick={onShowRegisterForm}
            />
          )}

          {isAuth ? (
            <MdPerson
              className={styles.nav_profile_icon}
              onClick={onShowRegisterForm}
            />
          ) : (
            <MdOutlinePersonOutline
              className={styles.nav_icon}
              onClick={onShowRegisterForm}
            />
          )}

          <div className={styles.header__right__actions__cart}>
            <MdOutlineShoppingCart
              className={styles.nav_icon}
              onClick={onOpenCartModal}
            />

            {cartItemsCount > 0 ? (
              <span className={styles.header__right__actions__cart__quantity}>
                {cartItemsCount}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* FIXME: Create React Portal  */}

      {showSidebar && <CategoriesSidebar />}

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}

      {/* Register Modal Window  */}
      {showRegisterForm && !showEmailCheckerForm && <ModalUserForm />}

      {showEmailCheckerForm && <EmailCheckerForPasswordResetForm />}
    </header>
  );
};

export default Header;
