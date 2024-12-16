import styles from "./FilterPrice.module.scss";

import { useAppDispatch } from "store/store";
import { setFilter } from "store/filters/filters";
import { useState } from "react";
import { set } from "lodash";

export default function FilterPrice() {
  const dispatch = useAppDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, type: string, name: string) => {
    dispatch(setFilter({ type, name }));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filter_title}>Ціна</p>

      <div className={styles.filter_inputs}>
        <div className={styles.filter_input}>
          <p>від</p>
          <input
            onChange={(e) => handleChangeInput(e, "Ціна від", e.target.value)}
            type="number"
            placeholder="0"
          />
        </div>
        <div className={styles.filter_input}>
          <p>до</p>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => handleChangeInput(e, "Ціна до", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
