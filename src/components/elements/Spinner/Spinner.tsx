import React from 'react';
import { FadeLoader } from 'react-spinners';
import styles from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <FadeLoader
        color="#196C67"
        radius={10}
        height={12}
        width={4}
        cssOverride={{ height: '48px', width: '48px' }}
      />
      <span className={styles.spinner__text}>Завантаження...</span>
      </div>
  );
};

export default Spinner;
