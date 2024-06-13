import styles from "styles/footer/index.module.scss";

import { Link } from "react-router-dom";
import { NAV_URL } from "constants/global";
import Logo from "components/elements/Logo/Logo";
import FooterSocialItem from "./FooterSocialItem";
import Subscribe from "components/elements/Subscribe/Subscribe";
import YoutubeSvg from "components/elements/YoutubeSvg/YoutubeSvg";
import TelegramSvg from "components/elements/TelegramSvg/TelegramSvg";
import FacebookSvg from "components/elements/FacebookSvg/FacebookSvg";
import InstagramSvg from "components/elements/InstagramSvg/InstagramSvg";
import YoutubeHoverSvg from "components/elements/YoutubeHoverSvg/YoutubeHoverSvg";
import FacebookHoverSvg from "components/elements/FacebookHoverSvg/FacebookHoverSvg";
import TelegramHoverSvg from "components/elements/TelegramHoverSvg/TelegramHoverSvg";
import InstagramHoverSvg from "components/elements/InstagramHoverSvg/InstagramHoverSvg";

const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__logo__wrapper}>
          <Logo color="white" />
        </div>
        <div className={styles.footer__block}>
          <h1 className={styles.footer__block__title}>Контакти</h1>
          <div className={styles.footer__block__text}>
            <span className={styles.footer__block__text__item}>
              Ми працюємо з 10:00 до 19:00 щодня
            </span>
            <Link
              to="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA,+1,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/data=!4m2!3m1!1s0x40d4ce51c3bdb9a1:0xff877737cf946b28?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              className={styles.footer__block__text__item__link}
            >
              м.Київ, вул.Хрещатик, 1
            </Link>
            <Link
              to="tel:+380973333377"
              className={styles.footer__block__text__item__link}
            >
              +38 097 333 33 77
            </Link>
            <Link
              to="mailto:info@tcl.ua"
              className={styles.footer__block__text__item__link}
            >
              info@tcl.ua
            </Link>
          </div>
          <div className={styles.footer__block__social}>
            <h1 className={styles.footer__block__social__title}>
              Ми в соціальних мережах
            </h1>
            <div className={styles.footer__block__social__links}>
              <FooterSocialItem
                show={<FacebookSvg />}
                hover={<FacebookHoverSvg />}
                link="http://facebook.com"
              />
              <FooterSocialItem
                show={<InstagramSvg />}
                hover={<InstagramHoverSvg />}
                link="http://instagram.com"
              />
              <FooterSocialItem
                show={<TelegramSvg />}
                hover={<TelegramHoverSvg />}
                link="http://telegram.org"
              />
              <FooterSocialItem
                show={<YoutubeSvg />}
                hover={<YoutubeHoverSvg />}
                link="http://youtube.com"
              />
            </div>
          </div>
        </div>
        <div className={styles.footer__block}>
          <h1 className={styles.footer__block__title}>Інформація</h1>
          <div className={styles.footer__block__text}>
            <Link
              to={NAV_URL.HOME_PAGE}
              className={styles.footer__block__text__item__link}
            >
              Про нас
            </Link>
            <Link
              to={NAV_URL.HOME_PAGE}
              className={styles.footer__block__text__item__link}
            >
              Оплата та доставка
            </Link>
            <Link
              to={NAV_URL.HOME_PAGE}
              className={styles.footer__block__text__item__link}
            >
              Публічна оферта
            </Link>
            <Link
              to={NAV_URL.HOME_PAGE}
              className={styles.footer__block__text__item__link}
            >
              Політика конфіденційності
            </Link>
          </div>
        </div>
        <Subscribe />
      </div>
      <div className={styles.footer__bottom}>
        <span className={styles.footer__bottom__text}>
          Team Challenge Library © 2024
        </span>
      </div>
      <span className={styles.footer__wrapper__line}></span>
    </footer>
  );
};

export default Footer;
