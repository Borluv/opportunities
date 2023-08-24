import type { ChangeEvent, FC, FormEvent } from 'react';
import { FaHouseUser, FaMoneyBillTrendUp } from 'react-icons/fa6';
import type { Options, Property } from '../../shared/types/common';
import { RiBuilding2Fill, RiSuitcaseFill } from 'react-icons/ri';
import { GiDiploma } from 'react-icons/gi';
import MultipleSelection from './multiple-selection/MultipleSelection';
import MultipleSelectionOption from './multiple-selection/multiple-selection-option/MultipleSelectionOption';
import { PiCirclesThreeFill } from 'react-icons/pi';
import SelfWrittenOption from './multiple-selection/self-written-option/SelfWrittenOption';
import SingleSelection from './single-selection/SingleSelection';
import SingleSelectionOption from './single-selection/single-selection-option/SingleSelectionOption';
import { createInterest } from '../../api/interests';
import { createLead } from '../../api/leads';
import logo from '../../assets/images/logo.png';
import { stringifyMultipleSelection } from '../../shared/logic/formatMultipleSelection';
import styles from './Form.module.scss';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Form: FC = () => {
  const property = useLoaderData() as Property;
  const storedViewer = localStorage.getItem('viewer') || '';
  const viewer = storedViewer ? JSON.parse(storedViewer) : null;

  const intialFormQuestions = {
    full_name: '',
    email: '',
    phone_number: '',
  };

  const initialMultipleSelection = {
    socialMedia: false,
    printedSigns: false,
    recommendation: false,
    advertisement: false,
    other: {
      value: '',
      selected: false,
    },
  };

  const [formQuestions, setFormQuestions] = useState(intialFormQuestions);
  const [option, setOption] = useState('');
  const [multipleSelection, setMultipleSelection] = useState<Options>(initialMultipleSelection);
  const [formPage, setFormPage] = useState<'left' | 'middle' | 'right'>('left');
  const [error, setError] = useState('  ');

  if (viewer?.id) {
    createInterest(viewer.id, property.id).then(() => window.location.replace(property.flyer_url));

    return <p>redirecting...</p>;
  }

  const handleQuestions = (event: ChangeEvent<HTMLInputElement>): void =>
    setFormQuestions({ ...formQuestions, [event.target.name]: event.target.value });

  const handleChange = (value: string): void => setOption(value);

  const handleOptions = (name: 'socialMedia' | 'printedSigns' | 'recommendation' | 'advertisement'): void =>
    setMultipleSelection({ ...multipleSelection, [name]: !multipleSelection[name] });

  const handleOtherValue = (event: ChangeEvent<HTMLInputElement>): void =>
    setMultipleSelection({ ...multipleSelection, other: { ...multipleSelection.other, value: event.target.value } });

  const handleOtherSelect = (value: boolean): void =>
    setMultipleSelection({ ...multipleSelection, other: { ...multipleSelection.other, selected: value } });

  const validateFormQuestions = (): string => {
    const errors = [];

    if (formQuestions.full_name.length < 2) {
      errors[0] = 'Name too short.';
    } else if (formQuestions.full_name.length > 50) {
      errors[0] = 'Name too long.';
    } else {
      errors[0] = '';
    }

    if (formQuestions.email.length > 0) {
      errors[1] = '';
    } else {
      errors[1] = 'Email must be present';
    }

    if (formQuestions.phone_number.length >= 9 && formQuestions.phone_number.length) {
      errors[2] = '';
    } else {
      errors[2] = 'Invalid phone number.';
    }

    return errors.filter((error) => error)[0];
  };

  const nextIfValid = (): void => {
    const newError = validateFormQuestions();
    if (!newError) setFormPage('middle');
    setError(newError);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const formattedData = {
      ...formQuestions,
      role: option,
      reference: stringifyMultipleSelection(multipleSelection),
    };

    createLead(formattedData)
      .then((viewer) => {
        localStorage.setItem('viewer', JSON.stringify(viewer));
        createInterest(viewer.id, property.id);
        window.location.replace(property.flyer_url);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={`${styles.form} ${styles[formPage]}`}>
        <section className={styles.dark}>
          <img src={logo} alt="Logo" className={styles.borluv} />
          <span className={`${styles.logo} ${styles.texture}`}>
            Interested in
            <br />
            <em>{property.address ?? ''}?</em>
            <br />
            Please tell us more about yourself.
          </span>

          <label htmlFor="full_name">
            Full name:
            <input
              type="text"
              name="full_name"
              placeholder="Your Full Name..."
              value={formQuestions.full_name}
              onChange={handleQuestions}
            />
          </label>

          <label htmlFor="email">
            Email Address:
            <input
              type="text"
              name="email"
              autoCapitalize="off"
              placeholder="your-email@email.com"
              value={formQuestions.email}
              onChange={handleQuestions}
            />
          </label>

          <label htmlFor="phone_number">
            Phone number:
            <input
              type="tel"
              name="phone_number"
              placeholder="555-55-5555"
              value={formQuestions.phone_number}
              onChange={handleQuestions}
            />
          </label>
          <div className={styles.buttons}>
            <small>{error}</small>
            <button type="button" onClick={nextIfValid} className={styles['margin-button']}>
              NEXT
            </button>
          </div>
        </section>

        <section>
          <SingleSelection legend="Which of the following options describes your role the best?">
            <SingleSelectionOption
              option="realtor"
              value={option}
              label="Realtor"
              icon={<RiBuilding2Fill />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
            <SingleSelectionOption
              option="business_owner"
              value={option}
              label="Business Owner"
              icon={<RiSuitcaseFill />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
            <SingleSelectionOption
              option="investor"
              value={option}
              label="Investor"
              icon={<FaMoneyBillTrendUp />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
            <SingleSelectionOption
              option="broker"
              value={option}
              label="Broker"
              icon={<GiDiploma />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
            <SingleSelectionOption
              option="tenant"
              value={option}
              label="Tenant"
              icon={<FaHouseUser />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
            <SingleSelectionOption
              option="other"
              value={option}
              label="Other"
              icon={<PiCirclesThreeFill />}
              handleChange={handleChange}
              handlePage={(): void => setFormPage('right')}
            />
          </SingleSelection>

          <div className={styles.buttons}>
            <button type="button" onClick={(): void => setFormPage('left')}>
              Back
            </button>
            <button type="button" onClick={(): void => setFormPage('right')}>
              Next or Skip
            </button>
          </div>
        </section>

        <section className={styles.dark}>
          <MultipleSelection legend="How did you hear about us?">
            <MultipleSelectionOption
              label="Social media"
              value="socialMedia"
              selected={multipleSelection.socialMedia}
              handleSelect={handleOptions}
            />
            <MultipleSelectionOption
              label="Printed signs"
              value="printedSigns"
              selected={multipleSelection.printedSigns}
              handleSelect={handleOptions}
            />
            <MultipleSelectionOption
              label="Recommendation"
              value="recommendation"
              selected={multipleSelection.recommendation}
              handleSelect={handleOptions}
            />
            <MultipleSelectionOption
              label="Advertisement"
              value="advertisement"
              selected={multipleSelection.advertisement}
              handleSelect={handleOptions}
            />
            <SelfWrittenOption
              value={multipleSelection.other.value}
              selected={multipleSelection.other.selected}
              handleSelect={handleOtherSelect}
              handleChange={handleOtherValue}
            />
          </MultipleSelection>

          <div className={styles.buttons}>
            <button type="button" onClick={(): void => setFormPage('middle')}>
              Back
            </button>
            <button type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;
