import Slider from 'react-slick';
import 'styles/slider/slick.css';
import 'styles/slider/slick-theme.css';
import styles from 'styles/slider/index.module.scss';

function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={styles.slider}>
          <img src="https://picsum.photos/3001/568" className={styles.slider__image} />
          <h1 className={styles.slider__title}>Назва книги 1</h1>
          <button className={styles.slider__button}>Переглянути</button>
        </div>
        <div className={styles.slider}>
          <img src="https://picsum.photos/3000/568" className={styles.slider__image} />
          <h1 className={styles.slider__title}>Назва книги 2</h1>
          <button className={styles.slider__button}>Переглянути</button>
        </div>
        <div className={styles.slider}>
          <img src="https://picsum.photos/3002/568" className={styles.slider__image} />
          <h1 className={styles.slider__title}>Назва книги 3</h1>
          <button className={styles.slider__button}>Переглянути</button>
        </div>
        <div className={styles.slider}>
          <img src="https://picsum.photos/3003/568" className={styles.slider__image} />
          <h1 className={styles.slider__title}>Назва книги 4</h1>
          <button className={styles.slider__button}>Переглянути</button>
        </div>
        <div className={styles.slider}>
          <img src="https://picsum.photos/3004/568" className={styles.slider__image} />
          <h1 className={styles.slider__title}>Назва книги 5</h1>
          <button className={styles.slider__button}>Переглянути</button>
        </div>
      </Slider>
    </div>
  );
}

export default SliderPage;
