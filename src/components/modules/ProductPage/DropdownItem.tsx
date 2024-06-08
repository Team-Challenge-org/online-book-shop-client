import type { TDropdownItemType } from "types/common";

import { useState } from "react";
import styles from "styles/productInfo/index.module.scss";

const DropdownItem = ({
  title,
  characteristics,
  description,
  order,
}: TDropdownItemType) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.product__main__item__dropdown}>
      <div
        className={styles.product__main__item__dropdown__header}
        onClick={() => handleShowMenu()}
      >
        <span className={styles.product__main__item__dropdown__header__title}>
          {title}
        </span>
        <span className={styles.product__main__item__dropdown__header__button}>
          {showMenu ? "-" : "+"}
        </span>
      </div>
      {showMenu ? (
        <div className={styles.product__main__item__dropdown__hiden}>
          {characteristics ? (
            <table
              className={
                styles.product__main__item__dropdown__hiden__characteristics
              }
            >
              <tbody>
                <tr>
                  <td>Видавництво</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.publishing}
                  </td>
                </tr>
                <tr>
                  <td>Мова</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.language}
                  </td>
                </tr>
                <tr>
                  <td>Тип обкладинки</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.cover}
                  </td>
                </tr>
                <tr>
                  <td>Кількість сторінок</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.pages}
                  </td>
                </tr>
                <tr>
                  <td>Формат</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.format}
                  </td>
                </tr>
                <tr>
                  <td>ISBN</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.isbn}
                  </td>
                </tr>
                <tr>
                  <td>Папір</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.paper}
                  </td>
                </tr>
                <tr>
                  <td>Ілюстрації</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.illustrations}
                  </td>
                </tr>
                <tr>
                  <td>Тип книги</td>
                  <td
                    className={
                      styles.product__main__item__dropdown__hiden__characteristics__right
                    }
                  >
                    {characteristics?.type}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}
          {description ? (
            <span className={styles.product__main__item__dropdown__hiden__text}>
              {description}
            </span>
          ) : (
            ""
          )}
          {order ? (
            <div className={styles.product__main__item__dropdown__hiden__order}>
              {order.map((item, index) => (
                <span
                  key={index}
                  className={
                    styles.product__main__item__dropdown__hiden__order__item
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownItem;
