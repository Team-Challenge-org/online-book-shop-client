import React, { useState } from 'react';
import styles from '../profilePage.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function OrderItem() {
  const [openAccordion, setOpenAccordion] = useState(false);
  return (
    <>
      <div className={styles.profile__order__list__item}>
        <span className={styles.profile__order__list__item__title}>
          Замовлення №1 від 07.07.2024 року
        </span>
        <div>
          <span className={styles.profile__order__list__item__subtitle}>Статус виконання</span>
          <span className={styles.profile__order__list__item__text}>Виконане</span>
        </div>
        <div
          className={styles.profile__order__list__item__icon__wrapper}
          onClick={() => setOpenAccordion(!openAccordion)}>
          {openAccordion ? (
            <MdKeyboardArrowUp className={styles.profile__order__list__item__icon} />
          ) : (
            <MdKeyboardArrowDown className={styles.profile__order__list__item__icon} />
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}
