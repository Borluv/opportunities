import type { FC } from 'react';
import type { PropertyData } from '../../../assets/data';
import PropertyDescription from './property-description/PropertyDescription';
import PropertyGallery from './property-gallery/PropertyGallery';
import PropertyMap from './property-map/PropertyMap';
import PropertyRemarks from './property-remarks/PropertyRemarks';

interface PropertyBodyPropTypes {
  property: PropertyData;
}

const PropertyBody: FC<PropertyBodyPropTypes> = ({ property: { id, remarks, map, gallery, summary, altView } }) => (
  <main>
    <PropertyRemarks id={id} remarks={remarks} />
    <PropertyMap map={map} />
    <PropertyGallery gallery={gallery} />
    <PropertyDescription summary={summary} altView={altView} />
  </main>
);

export default PropertyBody;
