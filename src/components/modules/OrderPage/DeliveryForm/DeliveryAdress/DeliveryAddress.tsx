import { useEffect, useState } from 'react';
import styles from '../../orderPage.module.scss';
import MeestBranch from './MeestBranch';
import NpBranch from './NpBranch';
import NpCourier from './NpCourier';
import UpBranch from './UpBranch';
import { useSelector } from 'react-redux';
import { selectDeliveryData } from 'store/delivery/selectors';

export default function DeliveryAddress() {
  const [delivery, setDelivery] = useState(1)
  const deliveryData = useSelector(selectDeliveryData)

  useEffect(() => {
    setDelivery(deliveryData.service)
  }, [deliveryData, delivery])

  console.log(delivery)

  return (
      <label className={styles.order__delivery__block__label}>
        {delivery == 1 && <NpBranch />}
        {delivery == 2 && <UpBranch />}
        {delivery == 3 && <MeestBranch />}
        {delivery == 4 && <NpCourier />}
      </label>
  );
}
