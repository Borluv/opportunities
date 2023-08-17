import type { ChangeEvent, FC, FormEvent } from 'react';
import MultipleSelection from './multiple-selection/MultipleSelection';
import MultipleSelectionOption from './multiple-selection/multiple-selection-open/MultipleSelectionOption';
import type { Options } from '../../shared/types/common';
import SelfWrittenOption from './multiple-selection/self-written-option/SelfWritteOption';
import SingleSelection from './single-selection/SingleSelection';
import SingleSelectionOption from './single-selection/single-selection-option/SingleSelectionOption';
import { stringifyMultipleSelection } from '../../shared/logic/formatMultipleSelection';
import { useState } from 'react';

const Form: FC = () => {
  const intialFormQuestions = {
    full_name: '',
    email: '',
    phone_number: '',
  };

  const initialMultipleSelection = {
    hello: false,
    bye: false,
    other: {
      value: '',
      selected: false,
    },
  };

  const [formQuestions, setFormQuestions] = useState(intialFormQuestions);
  const [option, setOption] = useState('1');
  const [multipleSelection, setMultipleSelection] = useState<Options>(initialMultipleSelection);

  const handleQuestions = (event: ChangeEvent<HTMLInputElement>): void =>
    setFormQuestions({ ...formQuestions, [event.target.name]: event.target.value });

  const handleChange = (value: string): void => setOption(value);
  const handleOptions = (name: 'hello' | 'bye'): void =>
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
    <form onSubmit={handleSubmit}>
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
          placeholder="555-55-5rriente"
          value={formQuestions.phone_number}
          onChange={handleQuestions}
        />
      </label>

      <SingleSelection legend="Which of the following options describes your role the best?">
        <SingleSelectionOption option="1" value={option} label="First Option" handleChange={handleChange} />
        <SingleSelectionOption option="2" value={option} label="Second Option" handleChange={handleChange} />
        <SingleSelectionOption option="3" value={option} label="Third Option" handleChange={handleChange} />
      </SingleSelection>

      <MultipleSelection legend="Just select something already...">
        <MultipleSelectionOption label="hello" selected={multipleSelection.hello} handleSelect={handleOptions} />
        <MultipleSelectionOption label="bye" selected={multipleSelection.bye} handleSelect={handleOptions} />
        <SelfWrittenOption
          value={multipleSelection.other.value}
          selected={multipleSelection.other.selected}
          handleSelect={handleOtherSelect}
          handleChange={handleOtherValue}
        />
      </MultipleSelection>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
