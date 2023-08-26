import type { FC } from 'react';
import { MdClose } from 'react-icons/md';
import styles from './QRModal.module.scss';

interface QRModalPropTypes {
  close: () => void;
  qrId: string;
}

const QRModal: FC<QRModalPropTypes> = ({ close, qrId }) => (
  <div className="backdrop">
    <button type="button" title="Close" onClick={close} className={styles.close}>
      <MdClose />
    </button>
    <div className={styles.container}>
      <img src={`/images/qr/${qrId}.svg`} alt="QR code" />
    </div>
  </div>
);

export default QRModal;
