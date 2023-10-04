import type { FC } from 'react';
import styles from './PropertyRemarks.module.scss';

interface PropertyRemarksPropTypes {
  id: string;
  remarks: string[];
}

const PropertyRemarks: FC<PropertyRemarksPropTypes> = ({ id, remarks }) => (
  <section className={styles.remarks}>
    <div className={styles.info}>
      <h2>Remarks</h2>
      {remarks.map((para) => (
        <p key={`par-${remarks.indexOf(para)}`}>{para}</p>
      ))}
    </div>
    <div className={styles.frame}>
      <img src={`/images/properties/${id}.png`} alt="Property image" />
    </div>
  </section>
);

export default PropertyRemarks;
