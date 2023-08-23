import { type FC, useState } from 'react';
import styles from './Card.module.scss';
import QRModal from './qr-modal/QRModal';

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

  const [modalVisibility, setModalVisibility] = useState(false);

  const openModal = () => setModalVisibility(true);
  const closeModal = () => setModalVisibility(false);

  const copyToClipboard = () => navigator.clipboard.writeText(`https://borluv.app/properties/${nickname}`);

  return (
    <>
      <li className={styles.card}>
        <img src={`/images/${nickname}.jpeg`} alt={address} />
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
