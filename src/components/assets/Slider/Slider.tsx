import Slider from 'react-slick';
import 'styles/slider/slick.css';
import 'styles/slider/slick-theme.css';
import { selectSliderBookData } from 'store/slider/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/store';
import { useEffect } from 'react';
import { fetchSliderBooks } from 'store/slider/asyncAction';
import SliderItem from './SliderItem';

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

  const { items } = useSelector(selectSliderBookData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getSliderBooks = async () => {
      dispatch(fetchSliderBooks());
    };

    getSliderBooks();
  }, [dispatch]);

  const renderedItems = items.slice(0, 5).map((item) => <SliderItem obj={item} key={item.id} />);

  return (
    <div className="slider-container">
      <Slider {...settings}>{renderedItems}</Slider>
    </div>
  );
}

export default SliderPage;
