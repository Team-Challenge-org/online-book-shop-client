import { Book } from 'store/book/types';
import styles from 'styles/slider/index.module.scss';

const SliderItem = ({ obj }: any) => {
  return (
    <div className={styles.slider}>
      <img src="https://picsum.photos/3001/568" className={styles.slider__image} />
      <h1 className={styles.slider__title}>{obj.title}</h1>
      <button className={styles.slider__button}>Детальніше</button>
    </div>
  );
};

export default SliderItem;
