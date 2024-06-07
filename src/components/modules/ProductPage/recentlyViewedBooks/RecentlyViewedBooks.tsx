import {
  handleTruncateAuthors,
  handleTruncateBookTitle,
} from "utils/truncateString";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRecentlyViewedBooks } from "store/recentlyViewedBooks/selectors";
import styles from "./recentlyViewedBooks.module.scss";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  return (
    <div {...props} className={styles.recently__arrow_next__wrapper}>
      <div {...props} className={styles.recently__arrow_next} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  return (
    <div {...props} className={styles.recently__arrow_prev__wrapper}>
      <div {...props} className={styles.recently__arrow_prev} />
    </div>
  );
}

export function RecentlyViewedBooks() {
  const navigate = useNavigate();
  const { books: recentlyViewedBooks } = useSelector(selectRecentlyViewedBooks);

  const settingsProduct = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return recentlyViewedBooks.length === 0 ? null : (
    <section className={styles.recently}>
      <h2>Нещодавно переглянуті книги</h2>

      <ul className={styles.recently__list}>
        <Slider {...settingsProduct} className={styles.book_box__slider}>
          {recentlyViewedBooks?.map((book) => (
            <li key={book.id} className={styles.book_box}>
              <img
                src={book?.titleImage as string}
                alt={"image of: " + book.title}
                className={styles.book_box__image}
              />

              <div className={styles.text_info}>
                <p data-title={book.authors as string}>
                  {handleTruncateAuthors(book?.authors as string)}
                </p>

                <h3
                  data-title={book.title}
                  onClick={() => navigate(`/book/${book.id}`)}
                >
                  {handleTruncateBookTitle(book?.title)}
                </h3>

                <span>{book.price} грн</span>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
}
