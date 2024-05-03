import styles from '../../../styles/logo/index.module.scss';

const Logo = ({ color }: { color: string }) => {
  return (
    <div className={styles.logo} style={{ color: color }}>
      <span className={styles.logo__top}>TCL</span>
      <span className={styles.logo__bottom}>Team Challenge Library</span>
    </div>
  );
};

export default Logo;
