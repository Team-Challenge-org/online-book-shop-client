import styles from 'styles/header/index.module.scss';
import SliderPage from 'components/assets/Slider/Slider';
import CartSvg from 'components/elements/CartSvg/CartSvg';
import FavSvg from 'components/elements/FavSvg/FavSvg';
import Logo from 'components/elements/Logo/Logo';
import ProfileSvg from 'components/elements/ProfileSvg/ProfileSvg';
import SearchSvg from 'components/elements/SearchSvg/SearchSvg';
import VoiceSvg from 'components/elements/VoiceSvg/VoiceSvg';

const Header = () => {
  return (
    <>
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

      <div className="">
        <SliderPage />
      </div>
    </>
  );
};

export default Header;
