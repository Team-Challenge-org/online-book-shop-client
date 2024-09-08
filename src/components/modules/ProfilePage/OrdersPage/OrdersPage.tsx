import React from 'react';
import styles from '../profilePage.module.scss';
import OrderItem from './OrderItem';

export default function OrdersPage() {
  return (
    <div className={styles.profile__order__list}>
      <OrderItem />
    </div>
  );
}
