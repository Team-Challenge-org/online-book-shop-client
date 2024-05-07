import Slider from 'react-slick';
import 'styles/slider/slick.css';
import 'styles/slider/slick-theme.css';

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
        <div>
          <img src="https://picsum.photos/3001/568" />
        </div>
        <div>
          <img src="https://picsum.photos/3000/568" />
        </div>
        <div>
          <img src="https://picsum.photos/3002/568" />
        </div>
        <div>
          <img src="https://picsum.photos/3003/568" />
        </div>
        <div>
          <img src="https://picsum.photos/3004/568" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderPage;
