import React from 'react';
import styles from './privacy.module.scss';

export type TPrivacyItem = {
  text: string;
};

export default function PrivacyTitleItem({ text }: TPrivacyItem) {
  return <h3 className={styles.privacy__subtitle}>{text}</h3>;
}
