import {
  handleTruncateAuthors,
  handleTruncateBookTitle,
} from "utils/truncateString";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSimilarBooks } from "store/books/booksSlice";
import { selectSimilarBooks } from "store/books/selectors";
// import Slider from "react-slick";

import styles from "./similarBooks.module.scss";

// function SampleNextArrow(props: any) {
//   return (
//     <div {...props} className={styles.recently__arrow_next__wrapper}>
//       <div {...props} className={styles.recently__arrow_next} />
//     </div>
//   );
// }

// function SamplePrevArrow(props: any) {
//   return (
//     <div {...props} className={styles.recently__arrow_prev__wrapper}>
//       <div {...props} className={styles.recently__arrow_prev} />
//     </div>
//   );
// }

export function SimilarBooks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const similarBooks = useSelector(selectSimilarBooks);

  //   const settingsProduct = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //   };

  return similarBooks.length === 0 ? null : (
    <section className={styles.recently}>
      <h2>Нещодавно переглянуті книги</h2>

      <ul className={styles.recently__list}>
        {/* <Slider {...settingsProduct} className={styles.book_box__slider}> */}
        {similarBooks?.map((book) => (
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
                onClick={() => {
                  navigate(`/book/${book.id}`);
                  dispatch(setSimilarBooks(book));
                }}
              >
                {handleTruncateBookTitle(book?.title)}
              </h3>

              <span>{book.price} грн</span>
            </div>
          </li>
        ))}
        {/* </Slider> */}
      </ul>
    </section>
  );
}
