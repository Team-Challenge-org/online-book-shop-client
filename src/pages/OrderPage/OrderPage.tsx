import OrderForms from 'components/modules/OrderPage/OrderForms/OrderForms';
import styles from '../../components/modules/OrderPage/orderPage.module.scss';
import OrderItems from 'components/modules/OrderPage/OrderItems/OrderItems';
import OrderConfirm from 'components/modules/OrderPage/OrderConfirm/OrderConfirm';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'store/auth/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectAuthUserCart } from 'store/cart/selectors';

export default function OrderPage() {
  const isAuth = useSelector(selectIsAuth);
  const cart = useSelector(selectAuthUserCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
    if (cart.cartItems.length < 1) {
      navigate('/');
    }
  }, [isAuth, cart]);

  return (
    <main className={styles.order}>
      <section className={styles.order__block}>
        <OrderForms />

        <div>
          <OrderItems />
          <OrderConfirm />
        </div>
      </section>
    </main>
  );
}
