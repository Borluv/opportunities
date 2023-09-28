import type { FC } from 'react';
import styles from './PropertyMap.module.scss';

interface PropertyMapPropTypes {
  map: string;
}

const PropertyMap: FC<PropertyMapPropTypes> = ({ map }) => (
  <section className={styles.map}>
    <h2>Map</h2>
    <div className={styles.container}>
      <img src={map} alt="Nearby gems" />
    </div>
  </section>
);

export default PropertyMap;
