import type { FC } from 'react';
import PropertyBody from './property-body/PropertyBody';
import PropertyFooter from './property-footer/PropertyFooter';
import PropertyHeader from './property-header/PropertyHeader';
import styles from './Property.module.scss';

const Property: FC = () => (
  <div className={styles.property}>
    <PropertyHeader />
    <PropertyBody />
    <PropertyFooter />
  </div>
);

export default Property;
