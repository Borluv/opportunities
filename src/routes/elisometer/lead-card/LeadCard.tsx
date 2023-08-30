import { type FC, useState } from 'react';
import { BsHouseHeartFill } from 'react-icons/bs';
import InterestsModal from './interests-modal/InterestsModal';
import type { Lead } from '../../../shared/types/common';
import formatDate from '../../../shared/logic/formatDate';
import styles from './LeadCard.module.scss';

interface LeadCardProptypes {
  lead: Lead;
}

const LeadCard: FC<LeadCardProptypes> = ({ lead: { id, full_name, email, phone_number, created_at } }) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const openModal = (): void => setModalVisibility(true);
  const closeModal = (): void => setModalVisibility(false);

  return (
    <>
      <li className={styles.card}>
        <div className={styles.info}>
          <span>{full_name}</span>
          <span>{email}</span>
          <span>{phone_number}</span>
          <span>{formatDate(created_at)}</span>
        </div>
        <button type="button" onClick={openModal} className={styles.button}>
          <BsHouseHeartFill />
          Interests
        </button>
      </li>
      {modalVisibility && <InterestsModal leadId={id} close={closeModal} />}
    </>
  );
};

export default LeadCard;
