import { useState } from 'react';
import styles from 'styles/productPage/index.module.scss';
import { DropdownItemType } from 'types/commont';

const DropdownItem = ({ title, element, text }: DropdownItemType) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.product__main__item__dropdown}>
      <div
        className={styles.product__main__item__dropdown__header}
        onClick={() => handleShowMenu()}>
        <span className={styles.product__main__item__dropdown__header__title}>{title}</span>
        <span className={styles.product__main__item__dropdown__header__button}>
          {showMenu ? '-' : '+'}
        </span>
      </div>
      {showMenu ? (
        <div className={styles.product__main__item__dropdown__hiden}>
          {element ? (
            <table className={styles.product__main__item__dropdown__hiden__characteristics}>
              <tbody>
                <tr>
                  <td>Видавництво</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.publishing}
                  </td>
                </tr>
                <tr>
                  <td>Мова</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.language}
                  </td>
                </tr>
                <tr>
                  <td>Тип обкладинки</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.cover}
                  </td>
                </tr>
                <tr>
                  <td>Кількість сторінок</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.pages}
                  </td>
                </tr>
                <tr>
                  <td>Формат</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.format}
                  </td>
                </tr>
                <tr>
                  <td>ISBN</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.isbn}
                  </td>
                </tr>
                <tr>
                  <td>Папір</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.paper}
                  </td>
                </tr>
                <tr>
                  <td>Ілюстрації</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.illustrations}
                  </td>
                </tr>
                <tr>
                  <td>Тип книги</td>
                  <td
                    className={styles.product__main__item__dropdown__hiden__characteristics__right}>
                    {element?.type}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            ''
          )}
          <span className={styles.product__main__item__dropdown__hiden__text}>{text}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default DropdownItem;
