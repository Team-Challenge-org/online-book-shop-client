import { Link } from 'react-router-dom';
import styles from 'styles/logo/index.module.scss';

const Logo = ({ color }: { color: string }) => {
  return (
    <Link to="/" className={styles.logo} style={{ color: color }}>
      <span className={styles.logo__top}>TCL</span>
      <span className={styles.logo__bottom}>Team Challenge Library</span>
    </Link>
  );
};

export default Logo;
