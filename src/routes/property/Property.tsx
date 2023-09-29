import { type FC, useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import HalfModal from './half-modal/HalfModal';
import PropertyBody from './property-body/PropertyBody';
import PropertyFooter from './property-footer/PropertyFooter';
import PropertyHeader from './property-header/PropertyHeader';
import type { Property as PropertyType } from '../../shared/types/common';
import data from '../../assets/data';

const Property: FC = () => {
  const { propertyId } = useParams();
  const property = data.find((property) => property.id === propertyId);
  const serverProperty = useLoaderData() as PropertyType;
  const viewer = localStorage.getItem('viewer') || '';

  const [modalVisibility, setModalVisibility] = useState(true);

  const closeModal = (): void => setModalVisibility(false);

  useEffect(() => {
    if (viewer) closeModal();
  }, [viewer]);

  if (property)
    return (
      <>
        <PropertyHeader title={property?.title} subtitle={property?.subtitle} />
        <PropertyBody property={property} />
        <PropertyFooter />
        <ScrollRestoration />
        {modalVisibility && <HalfModal property={serverProperty} closeModal={closeModal} />}
      </>
    );
};

export default Property;
