import type { FC } from 'react';
import PropertyDescription from './property-description/PropertyDescription';
import PropertyGallery from './property-gallery/PropertyGallery';
import PropertyMap from './property-map/PropertyMap';
import PropertyRemarks from './property-remarks/PropertyRemarks';

const PropertyBody: FC = () => (
  <main>
    <PropertyRemarks />
    <PropertyMap />
    <PropertyGallery />
    <PropertyDescription />
  </main>
);

export default PropertyBody;
