import type { FC } from 'react';
import goldLogo from '../../../assets/images/gold-logo.png';
import styles from './PropertyHeader.module.scss';

interface PropertyHeaderPropTypes {
  title: string;
  subtitle: string;
}

const PropertyHeader: FC<PropertyHeaderPropTypes> = ({ title, subtitle }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={goldLogo} alt="Borluv Logo" />
    </div>
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className={styles.decoline} />
    </div>
  </header>
);

export default PropertyHeader;
