import React from 'react';
import Slider from 'react-slick';
import styles from 'styles/productPage/index.module.scss';

const ProductPageSlider = ({ images }: any) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image: any) => (
          <img src={image} alt={image} className={styles.product__main__slider__image} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductPageSlider;
