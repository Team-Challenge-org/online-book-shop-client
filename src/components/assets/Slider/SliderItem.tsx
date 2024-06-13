import styles from "styles/slider/index.module.scss";

import type { SliderItemType } from "store/slider/types";

import { Link } from "react-router-dom";
import SliderImage from "./SliderImage";
import { NAV_URL } from "constants/global";

const SliderItem = ({ obj }: SliderItemType) => {
  return (
    <div className={styles.slider}>
      <SliderImage image={obj.titleImage} title={obj.title} />

      <h1 className={styles.slider__title}>{obj.title}</h1>

      <Link
        className={styles.slider__button}
        to={NAV_URL.PRODUCT_PAGE + obj.id}
      >
        Детальніше
      </Link>
      {/* FIXME: */}
      {obj?.quantity as number}
    </div>
  );
};

export default SliderItem;
