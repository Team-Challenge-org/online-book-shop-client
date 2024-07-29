import OrderForms from 'components/modules/OrderPage/OrderForms/OrderForms';
import styles from '../../components/modules/OrderPage/orderPage.module.scss';
import OrderItems from 'components/modules/OrderPage/OrderItems/OrderItems';
import OrderConfirm from 'components/modules/OrderPage/OrderConfirm/OrderConfirm';
import { useRef } from 'react';

export default function OrderPage() {
  return (
    <div className={styles.order}>
      <div className={styles.order__block}>
        <OrderForms />

        <div>
          <OrderItems />
          <OrderConfirm />
        </div>
      </div>
    </div>
  );
}
