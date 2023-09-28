import type { FC } from 'react';
import PropertyBody from './property-body/PropertyBody';
import PropertyFooter from './property-footer/PropertyFooter';
import PropertyHeader from './property-header/PropertyHeader';
import data from '../../assets/data';
import styles from './Property.module.scss';
import { useParams } from 'react-router-dom';

const Property: FC = () => {
  const { propertyId } = useParams();
  const property = data.find((property) => property.id === propertyId);

  if (property)
    return (
      <div className={styles.property}>
        <PropertyHeader title={property?.title} subtitle={property?.subtitle} />
        <PropertyBody property={property} />
        <PropertyFooter />
      </div>
    );
};

export default Property;
