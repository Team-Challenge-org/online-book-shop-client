import styles from 'styles/footer/index.module.scss';
import FacebookSvg from '../FacebookSvg/FacebookSvg';
import InstagramSvg from '../InstagramSvg/InstagramSvg';
import TelegramSvg from '../TelegramSvg/TelegramSvg';
import YoutubeSvg from '../YoutubeSvg/YoutubeSvg';
import { IFooterBlock } from 'types/commont';

const Contacts = ({ title, text, social }: IFooterBlock) => {
  return (
    <div className={styles.footer__block}>
      <h1 className={styles.footer__block__title}>{title}</h1>
      <div className={styles.footer__block__text}>
        {text.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      {social ? (
        <div className={styles.footer__block__social}>
          <h1>Ми в соціальних мережах</h1>
          <div className={styles.footer__block__social__links}>
            <FacebookSvg />
            <InstagramSvg />
            <TelegramSvg />
            <YoutubeSvg />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Contacts;
