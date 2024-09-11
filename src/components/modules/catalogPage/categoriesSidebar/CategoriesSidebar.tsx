import styles from "./CategoriesSidebar.module.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useOutsideModalClick } from "hooks/useOutsideModalClick";
import { closeCategoriesSidebar } from "store/catalog/catalogSlice";
import { CatalogCategoriesList } from "../categoriesList/CatalogCategoriesList";

export function CategoriesSidebar() {
  const dispatch = useDispatch();

  function handleCloseSidebar() {
    dispatch(closeCategoriesSidebar());
  }

  const overlayRef = useOutsideModalClick(handleCloseSidebar);

  //remove background scroll
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <aside className={styles.sidebar}>
        <div className={styles.header_box}>
          <h1 className={styles.title}>каталог</h1>

          <span className={styles.close_icon} onClick={handleCloseSidebar}>
            &times;
          </span>
        </div>

        <div className={styles.main_box}>
          <CatalogCategoriesList />
        </div>
      </aside>
    </div>
  );
}
