import React from 'react';
import { TPrivacyItem } from './PrivacyTitleItem';
import styles from './privacy.module.scss';

export default function PrivacyTextItem({ text }: TPrivacyItem) {
  return <span className={styles.privacy__text}>{text}</span>;
}
