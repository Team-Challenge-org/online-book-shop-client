import { useNavigate } from 'react-router-dom'
import styles from './serviceUnavailable.module.scss'
const ServiceUnavailable = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.error}>
            <div className={styles.error__block}>
                <h1 className={styles.error__block__title_number}>503</h1>
                <h3 className={styles.error__block__title}>Сервер недоступний</h3>
                <p className={styles.error__block__text}>На жаль, зараз сервер не готовий обробити запит, тому що перевантажений або на ньому проводяться технічні роботи. Спробуйте пізніше.</p>
                <button className={`button ${styles.error__block__button}`} onClick={() => navigate('/')}>Перезавантажити сайт</button>
            </div>
            <img src='./img/ServiceUnavailable.svg' alt="Service Unavailable" width='514px' height='405px' />
        </div>
    )
}

export default ServiceUnavailable