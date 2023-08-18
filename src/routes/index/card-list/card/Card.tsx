import type { FC } from 'react';

interface CardPropTypes {
  property: {
    id: number;
    address: string;
    state: string;
    city: string;
    postalCode: string;
    imageURL: string;
  };
}

const Card: FC<CardPropTypes> = ({ property }) => {
  const { address, state, city, postalCode, imageURL } = property;

  return (
    <li>
      <img src={imageURL} alt={address} />
      <div>
        <h2>{address}</h2>
        <p>
          {city}, {state}, {postalCode}
        </p>
        <button type="button">Copy Property URL</button>
        <button type="button">Display QR Code</button>
      </div>
    </li>
  );
};

export default Card;
