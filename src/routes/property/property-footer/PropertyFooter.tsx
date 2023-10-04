import ContactCard from './contact-card/ContactCard';
import type { FC } from 'react';
import alex from '../../../assets/images/contacts/alex.png';
import cesar from '../../../assets/images/contacts/cesar.png';
import gaby from '../../../assets/images/contacts/gaby.png';
import jimmy from '../../../assets/images/contacts/jimmy.png';
import styles from './PropertyFooter.module.scss';

interface PropertyFooterPropTypes {
  contact: 'cesar' | 'jimmy' | 'gaby';
}

const PropertyFooter: FC<PropertyFooterPropTypes> = ({ contact }) => (
  <footer className={styles.footer}>
    <p className={styles.question}>Ready to Learn More?</p>
    <h2>Contact Us</h2>
    {contact === 'gaby' ? (
      <ContactCard
        pictureURL={gaby}
        name="Gabriela Goyo"
        role="Capital Markets Analyst"
        phone="+1 (786) 245-3107"
        email="ggoyo@borluv.com"
      />
    ) : contact === 'cesar' ? (
      <ContactCard pictureURL={cesar} name="César Lang" role="CEO" phone="+1 (786) 367-9941" email="clang@borluv.com" />
    ) : (
      <ContactCard
        pictureURL={jimmy}
        name="Jimmy Mujica"
        role="Property Manager"
        phone="+1 (786) 245-3403"
        email="jmujica@borluv.com"
      />
    )}
    <div className={styles.decoline} />
    <ContactCard
      pictureURL={alex}
      name="Alex Boria"
      role="Owner/Investor"
      phone="+1 (786) 586-2492"
      email="aboria@borluv.com"
    />
  </footer>
);

export default PropertyFooter;
