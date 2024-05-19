import styles from 'styles/slider/index.module.scss';
import SliderImage from './SliderImage';
import { SliderItemType } from 'store/slider/types';

const SliderItem = ({ obj }: SliderItemType) => {
  return (
    <div className={styles.slider}>
      <SliderImage image={obj.image} title={obj.bookName} />
      <h1 className={styles.slider__title}>{obj.bookName}</h1>
      <button className={styles.slider__button}>Детальніше</button>
    </div>
  );
};

export default SliderItem;
