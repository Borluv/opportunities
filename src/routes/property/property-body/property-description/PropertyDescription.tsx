import type { FC } from 'react';
import Summary from './summary/Summary';
import type { SummaryItem } from '../../../../assets/data';
import styles from './PropertyDescription.module.scss';

interface PropertyDescriptionPropTypes {
  summary: SummaryItem[];
  altView: string;
}

const PropertyDescription: FC<PropertyDescriptionPropTypes> = ({ summary, altView }) => (
  <section className={styles.description}>
    <div className={styles.info}>
      <h2>Description</h2>
      <Summary summary={summary} />
    </div>
    {true && <img src={altView} alt="Property alternate view" className={styles.image} />}
  </section>
);

export default PropertyDescription;
