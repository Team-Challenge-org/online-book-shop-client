import styles from 'styles/slider/index.module.scss';

const SliderImage = ({ data, title }: { data: string | null; title: string }) => (
  <img src={`data:image/jpeg;base64,${data}`} alt={title} className={styles.slider__image} />
);

export default SliderImage;
