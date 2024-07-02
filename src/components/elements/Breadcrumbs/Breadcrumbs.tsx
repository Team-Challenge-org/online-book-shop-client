import styles from './breadcrumbs.module.scss';

import type { TBook } from 'store/books/types';

import { NAV_URL } from 'constants/global';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = ({ book }: { book?: TBook }) => {
  const location = useLocation();

  return (
    <div className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbs__list}>
        <li className={styles.breadcrumbs__list__item}>
          <Link to={NAV_URL.HOME_PAGE}>Головна</Link>
          <span className={styles.separator}>/</span>
        </li>
        {location.pathname.includes('/book') && (
          <li className={styles.breadcrumbs__list__item}>
            <Link to={'/book/category'}>{book?.category}</Link>
            <span className={styles.separator}>/</span>
          </li>
        )}
        {location.pathname.includes('/book/') && book && (
          <li className={styles.breadcrumbs__list__item}>
            <Link to={location.pathname}>{book.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
