import { type FC, useState } from 'react';
import SingleSelection from './single-selection/SingleSelection';
import SingleSelectionOption from './single-selection/single-selection-option/SingleSelectionOption';
import MultipleSelection from './multiple-selection/MultipleSelection';
import MultipleSelectionOption from './multiple-selection/multiple-selection-open/MultipleSelectionOption';
import SelfWrittenOption from './multiple-selection/self-written-option/SelfWritteOption';

interface Options {
  hello: boolean;
  bye: boolean;
  other: {
    value: string;
    selected: boolean;
  };
}

const Form: FC = () => {
  const initialMultipleSelection: Options = {
    hello: false,
    bye: false,
    other: {
      value: '',
      selected: true,
    },
  };

  const [option, setOption] = useState('1');
  const [multipleSelection, setMultipleSelection] = useState(initialMultipleSelection);

  const handleChange = (value: string) => setOption(value);
  const handleOptions = (options: Options) => setMultipleSelection(options);

  console.log(multipleSelection);

  return (
    <form>
      <label htmlFor="full_name">
        Full name:
        <input type="text" name="full_name" placeholder="Your Full Name..." />
      </label>

      <label htmlFor="email">
        Email Address:
        <input type="text" name="email" placeholder="your-email@email.com" />
      </label>

      <label htmlFor="phone_number">
        Phone number:
        <input type="text" name="phone_number" />
      </label>

      <SingleSelection legend="Which of the following options describes your role the best?">
        <SingleSelectionOption option="1" value={option} label="First Option" handleChange={handleChange} />
        <SingleSelectionOption option="2" value={option} label="Second Option" handleChange={handleChange} />
        <SingleSelectionOption option="3" value={option} label="Third Option" handleChange={handleChange} />
      </SingleSelection>

      <MultipleSelection legend="Just select something already...">
        <MultipleSelectionOption
          options={multipleSelection}
          value="hello"
          label="Hello!"
          handleSelect={handleOptions}
        />
        <MultipleSelectionOption options={multipleSelection} value="bye" label="Bye!" handleSelect={handleOptions} />
        <SelfWrittenOption options={multipleSelection} handleSelect={handleOptions} />
      </MultipleSelection>
      <button type="submit">Finish!</button>
    </form>
  );
};

export default Form;
