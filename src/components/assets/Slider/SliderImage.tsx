import styles from 'styles/slider/index.module.scss';

const SliderImage = ({ image, title }: { image: string | undefined; title: string }) => (
  <img src={image} alt={title} className={styles.slider__image} />
);

export default SliderImage;
