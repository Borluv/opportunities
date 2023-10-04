import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import type { Property } from '../../../shared/types/common';
import { TbRuler } from 'react-icons/tb';
import styles from './CatalogCard.module.scss';

interface CatalogCardPropTypes {
  property: Property;
  area?: {
    id: string;
    area: string;
  };
}

const CatalogCard: FC<CatalogCardPropTypes> = ({ property, area }) => {
  const { nickname, address, state, city, postal_code } = property;

  return (
    <li className={styles.card}>
      <img src={`/images/properties/${nickname}.png`} alt={address} />
      <div className={styles.info}>
        <h2>{address}</h2>
        <p className={styles.para}>
          <span>
            <MdLocationOn />
          </span>
          {city}, {state}, {postal_code}
        </p>
        <p className={styles.para}>
          <span>
            <TbRuler />
          </span>
          {area?.area}
        </p>
        <Link to={`/properties/${nickname}`} className={styles.link}>
          SEE DETAILS
        </Link>
      </div>
    </li>
  );
};

export default CatalogCard;
