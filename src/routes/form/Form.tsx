import type { ChangeEvent, FC, FormEvent } from 'react';
import MultipleSelection from './multiple-selection/MultipleSelection';
import MultipleSelectionOption from './multiple-selection/multiple-selection-open/MultipleSelectionOption';
import type { Options } from '../../shared/types/common';
import SelfWrittenOption from './multiple-selection/self-written-option/SelfWritteOption';
import SingleSelection from './single-selection/SingleSelection';
import SingleSelectionOption from './single-selection/single-selection-option/SingleSelectionOption';
import { stringifyMultipleSelection } from '../../shared/logic/formatMultipleSelection';
import styles from './Form.module.scss';
import { useState } from 'react';
import { RiBuilding2Fill, RiSuitcaseFill } from 'react-icons/ri';
import { FaHouseUser, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiDiploma } from 'react-icons/gi';
import { PiCirclesThreeFill } from 'react-icons/pi';

const Form: FC = () => {
  const intialFormQuestions = {
    full_name: '',
    email: '',
    phone_number: '',
  };

  const initialMultipleSelection = {
    'Social media': false,
    'Printed signs': false,
    Recommendation: false,
    Advertisement: false,
    other: {
      value: '',
      selected: false,
    },
  };

  const [formQuestions, setFormQuestions] = useState(intialFormQuestions);
  const [option, setOption] = useState('');
  const [multipleSelection, setMultipleSelection] = useState<Options>(initialMultipleSelection);
  const [formPage, setFormPage] = useState<'left' | 'middle' | 'right'>('left');

  const handleQuestions = (event: ChangeEvent<HTMLInputElement>): void =>
    setFormQuestions({ ...formQuestions, [event.target.name]: event.target.value });

  const handleChange = (value: string): void => setOption(value);
  const handleOptions = (name: 'Social media' | 'Printed signs' | 'Recommendation' | 'Advertisement'): void =>
    setMultipleSelection({ ...multipleSelection, [name]: !multipleSelection[name] });

  const handleOtherValue = (event: ChangeEvent<HTMLInputElement>): void =>
    setMultipleSelection({ ...multipleSelection, other: { ...multipleSelection.other, value: event.target.value } });
  const handleOtherSelect = (value: boolean): void =>
    setMultipleSelection({ ...multipleSelection, other: { ...multipleSelection.other, selected: value } });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const formattedData = {
      ...formQuestions,
      role: option,
      reference: stringifyMultipleSelection(multipleSelection),
    };

    console.log(formattedData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={`${styles.form} ${styles[formPage]}`}>
        <section>
          <span>Interested in [This property]? Please tell us more about yourself.</span>

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
              placeholder="your-email@email.com"
              value={formQuestions.email}
              onChange={handleQuestions}
            />
          </label>

          <label htmlFor="phone_number">
            Phone number:
            <input
              type="text"
              name="phone_number"
              placeholder="555-55-5555"
              value={formQuestions.phone_number}
              onChange={handleQuestions}
            />
          </label>
          <div className={styles.buttons}>
            <button type="button" onClick={() => setFormPage('middle')} className={styles['margin-button']}>
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
            />
            <SingleSelectionOption
              option="business_owner"
              value={option}
              label="Business Owner"
              icon={<RiSuitcaseFill />}
              handleChange={handleChange}
            />
            <SingleSelectionOption
              option="investor"
              value={option}
              label="Investor"
              icon={<FaMoneyBillTrendUp />}
              handleChange={handleChange}
            />
            <SingleSelectionOption
              option="broker"
              value={option}
              label="Broker"
              icon={<GiDiploma />}
              handleChange={handleChange}
            />
            <SingleSelectionOption
              option="tenant"
              value={option}
              label="Tenant"
              icon={<FaHouseUser />}
              handleChange={handleChange}
            />
            <SingleSelectionOption
              option="other"
              value={option}
              label="Other"
              icon={<PiCirclesThreeFill />}
              handleChange={handleChange}
            />
          </SingleSelection>

          <div className={styles.buttons}>
            <button type="button" onClick={() => setFormPage('left')}>
              Back
            </button>
            <button type="button" onClick={() => setFormPage('right')}>
              Next or Skip
            </button>
          </div>
        </section>

        <section>
          <MultipleSelection legend="How did you hear about us?">
            <MultipleSelectionOption
              label="Social media"
              selected={multipleSelection['Social media']}
              handleSelect={handleOptions}
            />
            <MultipleSelectionOption
              label="Printed signs"
              selected={multipleSelection['Printed signs']}
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
            <button type="button" onClick={() => setFormPage('middle')}>
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
