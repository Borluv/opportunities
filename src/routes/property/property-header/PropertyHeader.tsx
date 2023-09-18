import type { FC } from 'react';
import goldLogo from '../../../assets/images/gold-logo.png';
import styles from './PropertyHeader.module.scss';

const PropertyHeader: FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={goldLogo} alt="Borluv Logo" />
    </div>
    <div className={styles.container}>
      <h1>Winn Dixie</h1>
      <p>13508 N Florida Ave, Tampa, FL 33613, USA</p>
      <div className={styles.decoline} />
    </div>
  </header>
);

export default PropertyHeader;
