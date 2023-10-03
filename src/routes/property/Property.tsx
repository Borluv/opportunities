import { type FC, useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import HalfModal from './half-modal/HalfModal';
import PropertyBody from './property-body/PropertyBody';
import PropertyFooter from './property-footer/PropertyFooter';
import PropertyHeader from './property-header/PropertyHeader';
import type { Property as PropertyType } from '../../shared/types/common';
import { createInterest } from '../../api/interests';
import data from '../../assets/data';

const Property: FC = () => {
  const { propertyId } = useParams();
  const property = data.find((property) => property.id === propertyId);
  const serverProperty = useLoaderData() as PropertyType;
  const jsonViewer = localStorage.getItem('viewer');
  const viewer = jsonViewer ? JSON.parse(jsonViewer) : null;

  const [modalVisibility, setModalVisibility] = useState(false);

  const closeModal = (): void => setModalVisibility(false);
  const openModal = (): void => setModalVisibility(true);

  useEffect(() => {
    if (viewer && propertyId) {
      createInterest(viewer.id, propertyId)
        .then(() => {
          closeModal();
        })
        .catch(() => {
          openModal();
          localStorage.removeItem('viewer');
        });
    } else {
      openModal();
    }
  }, [viewer, propertyId]);

  if (property)
    return (
      <>
        <PropertyHeader title={property.title} subtitle={property.subtitle} />
        <PropertyBody property={property} />
        <PropertyFooter contact={property.contact} />
        <ScrollRestoration />
        {modalVisibility && <HalfModal property={serverProperty} closeModal={closeModal} />}
      </>
    );
};

export default Property;
