import Slider from "react-slick";
import styles from "styles/productInfo/index.module.scss";

function SampleNextArrow(props: any) {
  return (
    <div
      {...props}
      className={styles.product__main__slider__arrow_next__wrapper}
    >
      <div {...props} className={styles.product__main__slider__arrow_next} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  return (
    <div
      {...props}
      className={styles.product__main__slider__arrow_prev__wrapper}
    >
      <div {...props} className={styles.product__main__slider__arrow_prev} />
    </div>
  );
}

const ProductPageSlider = ({ images }: any) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image: any) => (
          <img
            key={image}
            src={image}
            alt={image}
            className={styles.product__main__slider__image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductPageSlider;
