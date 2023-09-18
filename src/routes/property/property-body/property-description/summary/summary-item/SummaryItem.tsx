import type { FC } from 'react';
import styles from './SummaryItem.module.scss';

interface SummaryItemPropTypes {
  item: {
    key: string;
    value: string;
    alternative?: string;
  };
}

const SummaryItem: FC<SummaryItemPropTypes> = ({ item: { key, value, alternative } }) => (
  <li className={styles.item}>
    <span className={styles.key}>{key}</span>
    <span className={styles.value}>
      {value}
      <br />
      {alternative}
    </span>
  </li>
);

export default SummaryItem;
