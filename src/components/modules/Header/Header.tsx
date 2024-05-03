import styles from '../../../styles/header/index.module.scss';
import CartSvg from '../../elements/CartSvg/CartSvg';
import FavSvg from '../../elements/FavSvg/FavSvg';
import Logo from '../../elements/Logo/Logo';
import ProfileSvg from '../../elements/ProfileSvg/ProfileSvg';
import SearchSvg from '../../elements/SearchSvg/SearchSvg';
import VoiceSvg from '../../elements/VoiceSvg/VoiceSvg';

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
        <form>
          <VoiceSvg />
          <input type="text" />
          <SearchSvg />
        </form>
        <div className={styles.header__right__actions}>
          <span>UA/EN</span>
          <FavSvg />
          <ProfileSvg />
          <CartSvg />
        </div>
      </div>
    </header>
  );
};

export default Header;
