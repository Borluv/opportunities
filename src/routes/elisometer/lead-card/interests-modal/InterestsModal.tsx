import type { FC, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import type { Interest } from '../../../../shared/types/common';
import { fetchLeadInterests } from '../../../../api/interests';
import styles from './InterestsModal.module.scss';

interface InterestsModalPropTypes {
  leadId: string;
  close: () => void;
}

const InterestsModal: FC<InterestsModalPropTypes> = ({ leadId, close }) => {
  const [status, setStatus] = useState<'pending' | 'loading' | 'success' | 'error'>('pending');
  const [interests, setInterest] = useState<Interest[]>([]);

  useEffect(() => {
    if (status === 'pending') setStatus('loading');

    if (status === 'loading')
      fetchLeadInterests(leadId)
        .then((interests) => {
          setInterest(interests);
          setStatus('success');
        })
        .catch(() => {
          setStatus('error');
        });
  }, [status, leadId]);

  const handleClick = (event: MouseEvent): void => {
    event.stopPropagation();
  };

  return (
    <div className="backdrop" onClick={close}>
      <div onClick={handleClick} className={styles.modal}>
        <h2 className={styles.heading}>Interests:</h2>
        <ul>
          {status === 'success' ? (
            interests.map((interest) => (
              <li key={`ast-${interest.asset.id}`}>
                <a href={interest.asset.flyer_url} rel="noreferrer" target="_blank">
                  {interest.asset.address}
                </a>
              </li>
            ))
          ) : (
            <p>{status}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default InterestsModal;
