import CatalogCard from './catalog-card/CatalogCard';
import type { FC } from 'react';
import type { Property } from '../../shared/types/common';
import goldLogo from '../../assets/images/gold-logo.png';
import styles from './Catalog.module.scss';
import { useLoaderData } from 'react-router-dom';

const Catalog: FC = () => {
  const properties = useLoaderData() as Property[];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={goldLogo} alt="Borluv Developments Logo" className={styles.logo} />
        <h1>Properties</h1>
      </header>
      <main>
        <ul className={styles.grid}>
          {properties.map((property) => (
            <CatalogCard key={`ppt-${property.id}`} property={property} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Catalog;
