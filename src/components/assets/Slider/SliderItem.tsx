import styles from 'styles/slider/index.module.scss';
import { SliderItemType } from 'types/commont';
import SliderImage from './SliderImage';

const SliderItem = ({ obj }: SliderItemType) => {
  return (
    <div className={styles.slider}>
      <SliderImage data={obj.titleImage} title={obj.title} />
      <h1 className={styles.slider__title}>{obj.title}</h1>
      <button className={styles.slider__button}>Детальніше</button>
    </div>
  );
};

export default SliderItem;
