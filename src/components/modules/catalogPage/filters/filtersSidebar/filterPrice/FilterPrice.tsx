import styles from "./FilterPrice.module.scss";

import { useAppDispatch } from "store/store";
import { setFilter } from "store/filters/filters";

export default function FilterPrice() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filter}>
      <p className={styles.filter_title}>Ціна</p>

      <div className={styles.filter_inputs}>
        <div className={styles.filter_input}>
          <p>від</p>
          <input
            onChange={(e) => dispatch(setFilter({ type: "Ціна від", name: e.target.value }))}
            type="number"
            placeholder="0"
          />
        </div>
        <div className={styles.filter_input}>
          <p>до</p>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => dispatch(setFilter({ type: "Ціна до", name: e.target.value }))}
          />
        </div>
      </div>
    </div>
  );
}
