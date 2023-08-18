import Card from './card/Card';
import type { FC } from 'react';
import properties from '../../../assets/properties';

const CardList: FC = () => {
  return (
    <ul>
      {properties.map((property) => (
        <Card key={`ppt-${property.id}`} property={property} />
      ))}
    </ul>
  );
};

export default CardList;
