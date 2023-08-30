import type { FC } from 'react';
import type { Lead } from '../../shared/types/common';
import LeadCard from './lead-card/LeadCard';
import styles from './Elisometer.module.scss';
import { useLoaderData } from 'react-router-dom';

const Elisometer: FC = () => {
  const leads = useLoaderData() as Lead[];

  return (
    <>
      <h2 className={styles.heading}>Lead List</h2>
      <ul className={styles.cardlist}>
        {leads.map((lead) => (
          <LeadCard key={`ld-${lead.id}`} lead={lead} />
        ))}
      </ul>
    </>
  );
};

export default Elisometer;
