import type { FC, ReactElement } from 'react';
import styles from './SingleSelection.module.scss';

interface SingleSelection {
  legend: string;
  children: ReactElement[];
}

const SingleSelection: FC<SingleSelection> = ({ legend, children }) => (
  <>
    <span>{legend}</span>
    <div className={styles.container}>{children}</div>
  </>
);

export default SingleSelection;
