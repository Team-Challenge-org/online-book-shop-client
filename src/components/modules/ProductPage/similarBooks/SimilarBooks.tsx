import type { TBook } from "store/books/types";
import styles from "./similarBooks.module.scss";

import {
  handleTruncateAuthors,
  handleTruncateBookTitle,
} from "utils/truncateString";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { selectSimilarBooks } from "store/books/selectors";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { setSimilarBooks } from "store/books/booksSlice";
import { addRecentlyViewedBook } from "store/recentlyViewedBooks/recentlyViewedBooksSlice";
import { NAV_URL } from "constants/global";

export function SimilarBooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const similarBooks = useSelector(selectSimilarBooks);

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

  function updateBookViewAndData(book: TBook) {
    navigate(NAV_URL.PRODUCT_PAGE + book.id);
    dispatch(setSimilarBooks(book));
    dispatch(addRecentlyViewedBook(book));
  }

  if (similarBooks?.length === 0) return null;

  return (
    <section>
      <h2>Вас може зацікавити</h2>

      <div className={styles.slider_embla}>
        <MdArrowBackIosNew
          className={styles.embla__prev}
          onClick={scrollPrev}
        />

        <div className={styles.embla}>
          <div className={styles.sembla__viewport} ref={emblaRef}>
            <ul className={styles.embla__container}>
              {similarBooks.map((book) => (
                <li key={book.id} className={styles.embla__slide}>
                  <img
                    src={book?.titleImage as string}
                    alt={"image of: " + book.title}
                    className={styles.book_image}
                  />

                  <div className={styles.text_info_box}>
                    <p data-title={book.authors as string}>
                      {handleTruncateAuthors(book?.authors as string)}
                    </p>

                    <h3
                      data-title={book.title}
                      onClick={() => updateBookViewAndData(book)}
                    >
                      {handleTruncateBookTitle(book?.title)}
                    </h3>

                    <span>{book.price} грн</span>
                  </div>
                </li>
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
