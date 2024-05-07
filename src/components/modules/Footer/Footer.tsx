import Logo from 'components/elements/Logo/Logo';
import styles from 'styles/footer/index.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Logo color="white" />
      </div>
      <div className={styles.footer__copyright}>
        <span>Team Challenge Library</span>
        <span>2024</span>
      </div>
    </>
  );
};

export default Footer;
