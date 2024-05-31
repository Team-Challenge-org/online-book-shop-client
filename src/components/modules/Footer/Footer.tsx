import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import styles from 'styles/footer/index.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <FooterTop />
      <FooterBottom />
      <span className={styles.footer__wrapper__line}></span>
    </div>
  );
};

export default Footer;
