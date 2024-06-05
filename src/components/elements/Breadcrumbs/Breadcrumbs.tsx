import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.scss';
import { Book } from 'store/books/types';

const Breadcrumbs = ({ book }: { book?: Book }) => {
  const location = useLocation();

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link to={'/'}>Головна</Link>
          <span className={styles.separator}>/</span>
        </li>
        {location.pathname.includes('/book') && (
          <li>
            <Link to={'/book/category'}>{book?.category}</Link>
            <span className={styles.separator}>/</span>
          </li>
        )}
        {location.pathname.includes('/book/') && book && (
          <li>
            <Link to={location.pathname}>{book.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
