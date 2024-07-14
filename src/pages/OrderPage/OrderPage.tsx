import ContactsForm from 'components/modules/OrderPage/ContactsForm/ContactsForm'
import styles from '../../components/modules/OrderPage/orderPage.module.scss'
import DeliveryForm from 'components/modules/OrderPage/DeliveryForm/DeliveryForm'

export default function OrderPage() {
  return (
    <div className={styles.order}>
        <span className={styles.order__title}>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</span>
        <ContactsForm />
        <DeliveryForm />
    </div>
  )
}
