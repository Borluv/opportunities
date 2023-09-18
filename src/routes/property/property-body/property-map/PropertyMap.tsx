import type { FC } from 'react';
import styles from './PropertyMap.module.scss';

const PropertyMap: FC = () => (
  <section className={styles.map}>
    <h2>Map</h2>
    <div className={styles.container}>
      <p>This is the map.</p>
    </div>
  </section>
);

export default PropertyMap;
