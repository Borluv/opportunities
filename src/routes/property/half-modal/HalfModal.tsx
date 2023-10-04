import type { ChangeEvent, FC, FormEvent } from 'react';
import type { Property } from '../../../shared/types/common';
import { createInterest } from '../../../api/interests';
import { createLead } from '../../../api/leads';
import logo from '../../../assets/images/logo.png';
import styles from './HalfModal.module.scss';
import { useState } from 'react';

interface HalfModalPropTypes {
  property: Property;
  closeModal: () => void;
}

const HalfModal: FC<HalfModalPropTypes> = ({ property, closeModal }) => {
  const [halfFormData, setHalfFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    role: '',
    reference: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setHalfFormData({ ...halfFormData, [event.target.name]: event.target.value });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    createLead(halfFormData)
      .then((viewer) => {
        localStorage.setItem('viewer', JSON.stringify(viewer));
        createInterest(viewer.id, property.id);
        closeModal();
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="backdrop">
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="Logo" className={styles.borluv} />
          <div className={styles.info}>
            <span>Presenting</span>
            <p>
              {property.address ?? ''} {property.city}, {property.state}
            </p>
            <small>Please tell us more about yourself.</small>
          </div>

          <label htmlFor="full_name" className={styles.label}>
            Full name:
            <input
              type="text"
              name="full_name"
              placeholder="Your Full Name..."
              value={halfFormData.full_name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="email" className={styles.label}>
            Email Address:
            <input
              type="text"
              name="email"
              autoCapitalize="off"
              placeholder="your-email@email.com"
              value={halfFormData.email}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone_number" className={styles.label}>
            Phone number:
            <input
              type="tel"
              name="phone_number"
              placeholder="555-55-5555"
              value={halfFormData.phone_number}
              onChange={handleChange}
            />
          </label>
          <div className={styles.buttons}>
            <small>{error}</small>
            <button type="submit">READY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HalfModal;
