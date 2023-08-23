import { type FC, useState } from 'react';
import styles from './Card.module.scss';
import QRModal from './qr-modal/QRModal';
import { Link } from 'react-router-dom';

interface CardPropTypes {
  property: {
    id: string;
    nickname: string;
    address: string;
    state: string;
    city: string;
    postal_code: string;
    image_url: string;
    flyer_url: string;
  };
}

const Card: FC<CardPropTypes> = ({ property }) => {
  const { nickname, address, state, city, postal_code } = property;
  const propertyURL = `https://borluv.app/properties/${nickname}`;

  const [modalVisibility, setModalVisibility] = useState(false);

  const openModal = () => setModalVisibility(true);
  const closeModal = () => setModalVisibility(false);

  const copyToClipboard = () => navigator.clipboard.writeText(propertyURL);

  return (
    <>
      <li className={styles.card}>
        <Link to={`/properties/${nickname}`}>
          <img src={`/images/${nickname}.jpeg`} alt={address} />
        </Link>
        <div className={styles.info}>
          <h2>{address}</h2>
          <p>
            {city}, {state}, {postal_code}
          </p>
          <div className={styles.buttons}>
            <button type="button" onClick={copyToClipboard}>
              Copy URL
            </button>
            <button type="button" onClick={openModal}>
              QR Code
            </button>
          </div>
        </div>
      </li>
      {modalVisibility && <QRModal close={closeModal} qrId={nickname} />}
    </>
  );
};

export default Card;
