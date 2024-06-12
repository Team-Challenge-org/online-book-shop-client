import styles from "./similarBooksList.module.scss";

import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { selectSimilarBooks } from "store/books/selectors";
import { useProductPageSlider } from "hooks/useProductPageSlider";
import { SimilarBookItem } from "../similarBookItem/SimilarBookItem";

export function SimilarBooksList() {
  const similarBooks = useSelector(selectSimilarBooks);
  const { emblaRef, scrollNext, scrollPrev } = useProductPageSlider();

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
                <SimilarBookItem book={book} key={book.id} />
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
