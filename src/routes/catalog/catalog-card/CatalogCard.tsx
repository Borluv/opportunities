import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import type { Property } from '../../../shared/types/common';
import styles from './CatalogCard.module.scss';

interface CatalogCardPropTypes {
  property: Property;
}

const CatalogCard: FC<CatalogCardPropTypes> = ({ property }) => {
  const { nickname, address, state, city, postal_code } = property;

  return (
    <li className={styles.card}>
      <img src="https://th.bing.com/th/id/OIF.kq9WXa8K3NbAYSgTRRSJVw?pid=ImgDet&rs=1" alt={address} />
      <div className={styles.info}>
        <h2>{address}</h2>
        <p className={styles.para}>
          <span>
            <MdLocationOn />
          </span>
          {city}, {state}, {postal_code}
        </p>
        <Link to={`/properties/${nickname}`} className={styles.link}>
          SEE DETAILS
        </Link>
      </div>
    </li>
  );
};

export default CatalogCard;
