import styles from 'styles/header/index.module.scss';
import CartSvg from 'components/elements/CartSvg/CartSvg';
import FavSvg from 'components/elements/FavSvg/FavSvg';
import Logo from 'components/elements/Logo/Logo';
import ProfileSvg from 'components/elements/ProfileSvg/ProfileSvg';
import SearchSvg from 'components/elements/SearchSvg/SearchSvg';

const Header = () => {
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
          <span className={styles.header__right__actions__switch}>UA / EN</span>
          <FavSvg />
          <ProfileSvg />
          <CartSvg />
        </div>
      </div>
    </header>
  );
};

export default Header;
