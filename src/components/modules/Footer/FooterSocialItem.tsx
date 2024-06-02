import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "styles/footer/index.module.scss";
import { FooterSocialItemProps } from "types/common";

const FooterSocialItem = ({ link, show, hover }: FooterSocialItemProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <Link
      to={link}
      target="_blank"
      className={styles.footer__block__social__links__item}
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      {hidden ? show : hover}
    </Link>
  );
};

export default FooterSocialItem;
