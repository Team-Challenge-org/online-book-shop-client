import styles from "./slideImage.module.scss";

import { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export function SliderImage({ images }: { images: string[] }) {
  const options: EmblaOptionsType = {
    loop: true,
    align: "start",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.slider_embla}>
      <MdArrowBackIosNew className={styles.embla__prev} onClick={scrollPrev} />

      <div className={styles.embla}>
        <div className={styles.sembla__viewport} ref={emblaRef}>
          <ul className={styles.embla__container}>
            {images?.map((img) => (
              <li className={styles.embla__slide}>
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
