import styles from './header.module.scss';

import { useEffect, useState } from 'react';
import { useAuth } from 'contexts/AuthContext';
import Logo from 'components/elements/Logo/Logo';
import { MdOutlineSearch } from 'react-icons/md';
import ModalUserForm from '../auth/ModalUserForm';
import { MdFavoriteBorder } from 'react-icons/md';
import { hideMessage } from 'store/user/userSlice';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { useModalCart } from 'contexts/ModalCartContext';
import { selectAuthData, selectShowMessage } from 'store/user/selectors';
import { selectNotAuthUserCart } from 'store/cart/selectors';
import { ModalCart } from '../ModalShoppingCart/ModalCart/ModalCart';
import { EmailCheckerForPasswordResetForm } from '../auth/resetPassword/emailCheckerForm/EmailCheckerForPasswordResetForm';
import { Link } from 'react-router-dom';

const Header = () => {
  const { showModal, onOpenCartModal } = useModalCart();
  const { showRegisterForm, onShowRegisterForm, showEmailCheckerForm } = useAuth();

  const { cartItems: shoppingCart } = useSelector(selectNotAuthUserCart);
  const message = useSelector(selectShowMessage);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuthData);
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
      <Logo color={'#000000'} />

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__list}>
          <li className={styles.header__nav__list__item}>Каталог</li>
          <li className={styles.header__nav__list__item}>Оплата та доставка</li>
          <li className={styles.header__nav__list__item}>Про нас</li>
        </ul>
      </nav>

      <div className={styles.header__right}>
        <form className={styles.header__right__form}>
          <input type='text' placeholder='Пошук' className={styles.header__right__form__input} />
          <MdOutlineSearch className={styles.header__right__form__icon} />
        </form>

        <div className={styles.header__right__actions}>
          {message && (
            <div className={styles.header__right__actions__message}>
              <span className={styles.header__right__actions__message__title}>
                Вітаємо,
                <span className={styles.header__right__actions__message__title_italic}>Ім’я</span>!
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
            <Link to='/profile?element=favorites'>
              <MdFavoriteBorder className={styles.nav_icon} />
            </Link>
          ) : (
            <MdFavoriteBorder className={styles.nav_icon} onClick={onShowRegisterForm} />
          )}

          <MdOutlinePersonOutline className={styles.nav_icon} onClick={onShowRegisterForm} />
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

      {/* Register Modal Window  */}
      {showRegisterForm && !showEmailCheckerForm && <ModalUserForm />}

      {showEmailCheckerForm && <EmailCheckerForPasswordResetForm />}
    </header>
  );
};

export default Header;
