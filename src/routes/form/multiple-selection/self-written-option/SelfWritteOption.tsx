import type { ChangeEvent, FC } from 'react';

interface SelfWrittenOptionPropTypes {
  value: string;
  selected: boolean;
  handleSelect: (value: boolean) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SelfWrittenOption: FC<SelfWrittenOptionPropTypes> = ({ value, selected, handleSelect, handleChange }) => {
  const selectOption = (): void => handleSelect(!selected);

  return (
    <li>
      <label htmlFor="other">
        Other
        <input
          type="text"
          name="other"
          placeholder="Please specify"
          value={value}
          onChange={handleChange}
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
