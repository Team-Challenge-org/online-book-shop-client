import styles from "./header.module.scss";

import { useEffect } from "react";
import { useAuth } from "contexts/AuthContext";
import Logo from "components/elements/Logo/Logo";
import { MdOutlineSearch } from "react-icons/md";
import ModalUserForm from "../auth/ModalUserForm";
import { MdFavoriteBorder } from "react-icons/md";
import { selectCart } from "store/cart/selectors";
import { hideMessage } from "store/user/userSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useModalCart } from "contexts/ModalCartContext";
import { selectShowMessage } from "store/user/selectors";
import { ModalCart } from "../ModalShoppingCart/ModalCart/ModalCart";
import { EmailCheckerForPasswordResetForm } from "../auth/resetPassword/emailCheckerForm/EmailCheckerForPasswordResetForm";

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();
  const { showRegisterForm, onShowRegisterForm, showEmailCheckerForm } =
    useAuth();

  const { items: shoppingCart } = useSelector(selectCart);
  const message = useSelector(selectShowMessage);
  const dispatch = useDispatch();

  function handleHideMessage() {
    dispatch(hideMessage());
  }

  useEffect(() => {
    if (message) {
      setTimeout(handleHideMessage, 5000);
    }
  }, [message]);

  return (
    <header className={styles.header}>
      <Logo color={"#000000"} />

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>Каталог</li>
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

          <MdFavoriteBorder className={styles.nav_icon} />

          <MdOutlinePersonOutline
            className={styles.nav_icon}
            onClick={onShowRegisterForm}
          />
          <div className={styles.header__right__actions__cart}>
            <MdOutlineShoppingCart
              className={styles.nav_icon}
              onClick={onOpenCartModal}
            />
            {shoppingCart.length > 0 ? (
              <span className={styles.header__right__actions__cart__quantity}>
                {shoppingCart.length}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}

      {/* Register Modal Window  */}
      {showRegisterForm && !showEmailCheckerForm && <ModalUserForm />}

      {showEmailCheckerForm && <EmailCheckerForPasswordResetForm />}
    </header>
  );
};

export default Header;
