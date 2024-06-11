import styles from "styles/header/index.module.scss";

import Logo from "components/elements/Logo/Logo";
import { MdFavoriteBorder } from "react-icons/md";
import SearchSvg from "components/elements/SearchSvg/SearchSvg";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { ModalCart } from "../ModalShoppingCart/ModalCart/ModalCart";
import { useModalCart } from "contexts/modalCartWindow/ModalCartContext";

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();

  return (
    <header className={styles.header}>
      <Logo color={"#000000"} />
      <nav className={styles.header__nav}>
        <ul>
          <li>Каталог</li>
          <li>Оплата та доставка</li>
          <li>Про нас</li>
        </ul>
      </nav>
      <div className={styles.header__right}>
        <form className={styles.header__right__form}>
          <input
            type="text"
            placeholder="Пошук"
            className={styles.header__right__form__input}
          />
          <SearchSvg />
        </form>
        <div className={styles.header__right__actions}>
          <span className={styles.header__right__actions__switch}>
            <span>UA </span>/ EN
          </span>

          <MdFavoriteBorder className={styles.nav_icon} />
          <MdOutlinePersonOutline className={styles.nav_icon} />
          <MdOutlineShoppingCart
            className={styles.nav_icon}
            onClick={onOpenCartModal}
          />
        </div>
      </div>

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}
    </header>
  );
};

export default Header;
