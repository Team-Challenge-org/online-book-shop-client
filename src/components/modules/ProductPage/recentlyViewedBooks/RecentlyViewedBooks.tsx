import { handleTruncateAuthors, handleTruncateBookTitle } from 'utils/truncateString';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectRecentlyViewedBooks } from 'store/recentlyViewedBooks/selectors';

import styles from './recentlyViewedBooks.module.scss';

import Slider from 'react-slick';
import 'styles/slider/slick.css';
import 'styles/slider/slick-theme.css';

export function RecentlyViewedBooks() {
  const navigate = useNavigate();
  const { books: recentlyViewedBooks } = useSelector(selectRecentlyViewedBooks);

  const settingsProduct = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  console.log(recentlyViewedBooks);

  return recentlyViewedBooks.length === 0 ? null : (
    <section>
      <h2>Нещодавно переглянуті книги</h2>

      <ul>
        <Slider {...settingsProduct}>
          {recentlyViewedBooks?.map((book) => (
            <li key={book.id} className={styles.book_box}>
              <img
                src={book?.titleImage as string}
                alt={'image of: ' + book.title}
                style={{ width: '302px', height: '368px' }}
              />

              <div className={styles.text_info}>
                <p data-title={book.authors as string}>
                  {handleTruncateAuthors(book?.authors as string)}
                </p>

                <h3 data-title={book.title} onClick={() => navigate(`/book/${book.id}`)}>
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
