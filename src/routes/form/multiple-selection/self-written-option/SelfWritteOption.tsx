import { type FC, useState, ChangeEvent } from 'react';

interface SelfWrittenOptionPropTypes {
  options: string[];
  handleSelect: (options: string[]) => void;
}

const SelfWrittenOption: FC<SelfWrittenOptionPropTypes> = ({ options, handleSelect }) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(false);

  const handleOther = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

  const selectOption = () => {
    if (selected) setValue('');

    setSelected(!selected);
  };

  return (
    <li>
      <label htmlFor="other">
        Other
        <input
          type="text"
          name="other"
          placeholder="Please specify"
          value={value}
          onChange={handleOther}
          disabled={!selected}
        />
      </label>
      <button type="button" onClick={selectOption}>
        {selected ? 'selected' : 'not selected'}
      </button>
    </li>
  );
};

export default SelfWrittenOption;
