import styles from "styles/footer/index.module.scss";

import type { TFooterSocialItemProps } from "types/common";

import { useState } from "react";
import { Link } from "react-router-dom";

const FooterSocialItem = ({ link, show, hover }: TFooterSocialItemProps) => {
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
