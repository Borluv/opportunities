import { useLoaderData } from 'react-router-dom';
import Card from './card/Card';
import type { FC } from 'react';
import { Property } from '../../../shared/types/common';

const CardList: FC = () => {
  const properties = useLoaderData() as Property[];

  return (
    <ul>
      {properties.map((property) => (
        <Card key={`ppt-${property.id}`} property={property} />
      ))}
    </ul>
  );
};

export default CardList;
