import styles from "./header.module.scss";

import { useSelector } from "react-redux";
import { useAuth } from "contexts/AuthContext";
import { MdOutlineSearch } from "react-icons/md";
import Logo from "components/elements/Logo/Logo";
import { selectCart } from "store/cart/selectors";
import ModalUserForm from "../auth/ModalUserForm";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useModalCart } from "contexts/ModalCartContext";
import { ModalCart } from "../ModalShoppingCart/ModalCart/ModalCart";
import { ResetPasswordModalForm } from "../auth/resetPasswordForm/ResetPasswordModalForm";

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();
  const { showRegisterForm, onShowRegisterForm, showResetPasswordForm } =
    useAuth();
  const { items: shoppingCart } = useSelector(selectCart);

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
      {showRegisterForm && !showResetPasswordForm && <ModalUserForm />}

      {showResetPasswordForm && <ResetPasswordModalForm />}
    </header>
  );
};

export default Header;
