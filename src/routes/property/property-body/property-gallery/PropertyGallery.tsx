import { type FC, useState } from 'react';
import styles from './PropertyGallery.module.scss';

interface PropertyGalleryPropTypes {
  gallery: string[];
}

const arr = ['first', 'second', 'third'];

const PropertyGallery: FC<PropertyGalleryPropTypes> = ({ gallery }) => {
  const [carousel, setCarousel] = useState(0);

  const turnNext = (): void => setCarousel(carousel + 1);

  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <div className={styles.container}>
        <div className={styles[arr[carousel]]}>
          <img src={gallery[0]} alt="Gallery image" onClick={turnNext} className={styles.image} />
          <img src={gallery[1]} alt="Gallery image" onClick={turnNext} className={styles.image} />
          <img src={gallery[2]} alt="Gallery image" onClick={(): void => setCarousel(0)} className={styles.image} />
        </div>
      </div>
      <div className={styles.indicators}>
        <div onClick={(): void => setCarousel(0)} className={carousel === 0 ? styles.active : ''} />
        <div onClick={(): void => setCarousel(1)} className={carousel === 1 ? styles.active : ''} />
        <div onClick={(): void => setCarousel(2)} className={carousel === 2 ? styles.active : ''} />
      </div>
      <div className={styles.decoline} />
    </section>
  );
};

export default PropertyGallery;
