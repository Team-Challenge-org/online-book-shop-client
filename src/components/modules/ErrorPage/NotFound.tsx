import { useNavigate } from 'react-router-dom'
import styles from './notFound.module.scss'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="">
        <div className={styles.error}>
            <img src='./img/NotFound.svg' alt="Not Found" width='481px' height='300px' />
            <div className={styles.error__block}>
                <h3 className={styles.error__block__title}>На жаль, сторінки, яку ви шукаєте, не існує</h3>
                <p className={styles.error__block__text}>
                    Це могло статися з наступних причин:
</p>
<ul className={styles.error__block__list}>
    <li>
Неправильно набрана адреса
    </li>
    <li>
    Такої сторінки ніколи не було на цьому сайті</li>
    <li>
    Така сторінка була, але за цією адресою її більше немає</li>
</ul>
                
            </div>
        </div>
        <div className={styles.error__footer}>
            <p className={styles.error__footer__text}><span className={styles.error__footer__text__green}>Ви можете: </span>повернутись на головну сторінку або спробувати знайти те, що вам потрібно, за допомогою пошуку на нашому сайті</p>
            <button className={`button ${styles.error__footer__button}`} onClick={() => navigate('/')}>Повернутись на Головну сторінку</button>
        </div>
        </div>
    )
}

export default NotFound