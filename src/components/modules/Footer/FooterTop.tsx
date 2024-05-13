import FooterBlock from 'components/elements/FooterBlock/FooterBlock';
import Logo from 'components/elements/Logo/Logo';
import Subscribe from 'components/elements/Subscribe/Subscribe';
import styles from 'styles/footer/index.module.scss';

const FooterTop = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo__wrapper}>
        <Logo color="white" />
      </div>
      <FooterBlock
        title="Контакти"
        text={[
          'Ми  працюємо з 10:00 до 19:00 щодня',
          'м.Київ, вул.Хрещатик, 1',
          '+38 097 333 33 77',
          'info@tcl.ua',
        ]}
        social={true}
      />
      <FooterBlock
        title="Інформація"
        text={['Про нас', 'Оплата та доставка', 'Публічна оферта', 'Політика конфіденційності']}
      />
      <Subscribe />
    </div>
  );
};

export default FooterTop;
