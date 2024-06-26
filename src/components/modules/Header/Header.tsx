import styles from './header.module.scss';

import Logo from 'components/elements/Logo/Logo';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { useModalCart } from 'contexts/ModalCartContext';
import { SearchSvg } from 'components/elements/SearchSvg/SearchSvg';
import { ModalCart } from '../ModalShoppingCart/ModalCart/ModalCart';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();
  const { items: shoppingCart } = useSelector(selectCart);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Logo color={'#000000'} />
      <nav className={styles.header__nav}>
        <ul>
          <li>Каталог</li>
          <li>Оплата та доставка</li>
          <li>Про нас</li>
        </ul>
      </nav>
      <div className={styles.header__right}>
        <form className={styles.header__right__form}>
          <input type="text" placeholder="Пошук" className={styles.header__right__form__input} />
          <SearchSvg />
        </form>
        <div className={styles.header__right__actions}>
          <span className={styles.header__right__actions__switch}>
            <span>UA </span>/ EN
          </span>

          <MdFavoriteBorder className={styles.nav_icon} />
          <MdOutlinePersonOutline className={styles.nav_icon} onClick={() => navigate('/login')} />
          <div className={styles.header__right__actions__cart}>
            <MdOutlineShoppingCart className={styles.nav_icon} onClick={onOpenCartModal} />
            {shoppingCart.length > 0 ? (
              <span className={styles.header__right__actions__cart__quantity}>
                {shoppingCart.length}
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      {/* Modal Window For Shopping Cart */}
      {showModal && <ModalCart />}
    </header>
  );
};

export default Header;
