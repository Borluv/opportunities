import type { FC } from 'react';
import styles from './ContactCard.module.scss';

interface ContactCardPropTypes {
  pictureURL: string;
  name: string;
  role: string;
  phone: string;
  email: string;
}

const ContactCard: FC<ContactCardPropTypes> = ({ pictureURL, name, role, phone, email }) => (
  <div className={styles.card}>
    <img src={pictureURL} alt="Profile picture" className={styles.picture} />
    <div className={styles.info}>
      <h3>{name}</h3>
      <span>{role}</span>
      <span>M: {phone}</span>
      <span>E: {email}</span>
    </div>
  </div>
);

export default ContactCard;
