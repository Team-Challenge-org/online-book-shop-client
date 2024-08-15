import React from 'react';
import styles from './profileModal.module.scss';
import { MdOutlinePerson } from 'react-icons/md';

export default function ProfileModal() {
  return (
    <>
      <div className={styles.profile__block}>
        <div className={styles.profile__block__icon__wrapper}>
          <MdOutlinePerson className={styles.profile__block__icon} />
        </div>
        <span className={styles.profile__block__title}>МІЙ ПРОФІЛЬ</span>
      </div>

      <span className={styles.profile__line}></span>
    </>
  );
}
