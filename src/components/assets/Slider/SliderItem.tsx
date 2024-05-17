import styles from 'styles/slider/index.module.scss';
import { SliderItemType } from 'types/commont';

const SliderItem = ({ obj }: SliderItemType) => {
  return (
    <div className={styles.slider}>
      <img src="https://picsum.photos/3001/568" className={styles.slider__image} alt={obj.title} />
      <h1 className={styles.slider__title}>{obj.title}</h1>
      <button className={styles.slider__button}>Детальніше</button>
    </div>
  );
};

export default SliderItem;
