import OrderPageComponent from 'components/modules/OrderPage/OrderPageComponent';
import styles from '../../components/modules/OrderPage/orderPage.module.scss';

export default function OrderPage() {
  return (
    <div className={styles.order}>
      <OrderPageComponent />
    </div>
  );
}
