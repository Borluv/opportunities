import type { FC } from 'react';
import styles from './PropertyRemarks.module.scss';

const PropertyRemarks: FC = () => (
  <section className={styles.remarks}>
    <div className={styles.info}>
      <h2>Remarks</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus repudiandae labore, iure eveniet
        ipsa ipsam nostrum optio numquam, ex, distinctio corporis consequatur et maxime minima accusamus ipsum id
        reiciendis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quos voluptatum laborum asperiores, harum itaque
        dignissimos qui quas ut a consectetur voluptas atque quisquam vitae aut dolorum quis id possimus?
      </p>
    </div>
    <div className={styles.frame}>
      <img src="/images/properties/13508-n-florida-ave.png" alt="Property image" />
    </div>
  </section>
);

export default PropertyRemarks;
