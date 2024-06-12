import styles from "./recentlyViewedBooksList.module.scss";

import { useSelector } from "react-redux";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useProductPageSlider } from "hooks/useProductPageSlider";
import { selectRecentlyViewedBooks } from "store/recentlyViewedBooks/selectors";
import { RecentlyViewedBooksItem } from "../recentlyViewedBookItem/RecentlyViewedBooksItem";

export function RecentlyViewedBooksList() {
  const { emblaRef, scrollNext, scrollPrev } = useProductPageSlider();
  const { books: recentlyViewedBooks } = useSelector(selectRecentlyViewedBooks);

  const booksQuantity: number = recentlyViewedBooks?.length;

  return booksQuantity === 0 ? null : (
    <section>
      <h2>Нещодавно переглянуті книги</h2>

      <div className={styles.slider_embla}>
        {booksQuantity > 4 ? (
          <MdArrowBackIosNew
            className={styles.embla__prev}
            onClick={scrollPrev}
          />
        ) : null}

        <div className={styles.embla}>
          <div className={styles.sembla__viewport} ref={emblaRef}>
            <ul className={styles.embla__container}>
              {recentlyViewedBooks.map((book) => (
                <RecentlyViewedBooksItem book={book} key={book.id} />
              ))}
            </ul>
          </div>
        </div>

        {booksQuantity > 4 ? (
          <MdArrowForwardIos
            className={styles.embla__next}
            onClick={scrollNext}
          />
        ) : null}
      </div>
    </section>
  );
}
