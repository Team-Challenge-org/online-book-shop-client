import type { EmblaOptionsType } from "embla-carousel";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function useProductPageSlider() {
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

  return { emblaRef, scrollPrev, scrollNext };
}
