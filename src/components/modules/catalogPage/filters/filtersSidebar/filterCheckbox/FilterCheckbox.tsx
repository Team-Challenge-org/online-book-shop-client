import { useState } from "react";
import { useAppDispatch } from "store/store";

import { setFilter, deleteFilter } from "store/filters/filters";
import checkMark from "components/../../public/img/checkMark.svg";
import styles from "./FilterCheckbox.module.scss";

interface FilterCheckboxProps {
  name: string;
  typeOfFilters: string;
}

export default function FilterCheckbox({ name, typeOfFilters }: FilterCheckboxProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleClick() {
    setIsActive((prevActive) => !prevActive);

    if (isActive === false) {
      dispatch(setFilter({ type: typeOfFilters, name }));
    } else {
      dispatch(deleteFilter({ type: typeOfFilters, name }));
    }
  }

  return (
    <li onClick={handleClick} className={`${styles.checkbox} ${isActive ? styles.active : ""}`}>
      <div>{isActive && <img src={checkMark} alt="checkMark" />}</div>
      <p>{name}</p>
    </li>
  );
}
