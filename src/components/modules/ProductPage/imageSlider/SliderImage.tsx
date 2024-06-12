import styles from "./sliderImage.module.scss";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useProductPageSlider } from "hooks/useProductPageSlider";

export function SliderImage({ images }: { images: string[] }) {
  const { emblaRef, scrollNext, scrollPrev } = useProductPageSlider();

  return (
    <div className={styles.slider_embla}>
      <MdArrowBackIosNew className={styles.embla__prev} onClick={scrollPrev} />

      <div className={styles.embla}>
        <div className={styles.sembla__viewport} ref={emblaRef}>
          <ul className={styles.embla__container}>
            {images?.map((img) => (
              <li className={styles.embla__slide} key={"image:" + img}>
                <img src={img} alt={img} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MdArrowForwardIos className={styles.embla__next} onClick={scrollNext} />
    </div>
  );
}
