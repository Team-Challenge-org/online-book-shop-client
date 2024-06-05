import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blocks = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
];

export default function TestSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <ul>
      <Slider {...settings}>
        {blocks.map((block) => (
          <div>
            <h3>{block.num}</h3>
            <p>sdl;dkfhgjj;sld</p>
            <p>sadlfh</p>
          </div>
        ))}
      </Slider>
    </ul>
  );
}
