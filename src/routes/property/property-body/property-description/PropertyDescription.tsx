import type { FC } from 'react';
import Summary from './summary/Summary';
import styles from './PropertyDescription.module.scss';

const PropertyDescription: FC = () => (
  <section className={styles.description}>
    <div className={styles.info}>
      <h2>Description</h2>
      <Summary />
    </div>
    {true && (
      <img src="/images/properties/13508-n-florida-ave.png" alt="Property alternate view" className={styles.image} />
    )}
  </section>
);

export default PropertyDescription;
