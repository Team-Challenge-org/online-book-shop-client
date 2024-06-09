import { useCallback } from "react";
import { useSelector } from "react-redux";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { selectRecentlyViewedBooks } from "store/recentlyViewedBooks/selectors";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./recentlyViewedBooks.module.scss";
import RecentlyViewedBooksItem from "./RecentlyViewedBooksItem";

export function RecentlyViewedBooks() {
  const { books: recentlyViewedBooks } = useSelector(selectRecentlyViewedBooks);

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
    <section>
      <h2>Нещодавно переглянуті книги</h2>

      <div className={styles.slider_embla}>
        <MdArrowBackIosNew
          className={styles.embla__prev}
          onClick={scrollPrev}
        />

        <div className={styles.embla}>
          <div className={styles.sembla__viewport} ref={emblaRef}>
            <ul className={styles.embla__container}>
              {recentlyViewedBooks.map((book) => (
                <RecentlyViewedBooksItem book={book} key={book.id} />
              ))}
            </ul>
          </div>
        </div>

        <MdArrowForwardIos
          className={styles.embla__next}
          onClick={scrollNext}
        />
      </div>
    </section>
  );
}
