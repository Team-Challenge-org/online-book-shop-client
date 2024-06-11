import styles from "styles/logo/index.module.scss";

import { Link } from "react-router-dom";
import { NAV_URL } from "constants/global";

const Logo = ({ color }: { color: string }) => {
  return (
    <Link
      to={NAV_URL.HOME_PAGE}
      className={styles.logo}
      style={{ color: color }}
    >
      <span className={styles.logo__top}>TCL</span>
      <span className={styles.logo__bottom}>Team Challenge Library</span>
    </Link>
  );
};

export default Logo;
