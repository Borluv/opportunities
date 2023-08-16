import type { FC } from 'react';

interface MultipleSelectionOptionPropTypes {
  options: string[];
  value: string;
  label: string;
  handleSelect: (options: string[]) => void;
}

const MultipleSelectionOption: FC<MultipleSelectionOptionPropTypes> = ({ options, value, label, handleSelect }) => {
  const selected = options.includes(value);

  const selectOption = () => {
    if (selected) {
      handleSelect(options.filter((option) => option !== value));
    } else {
      handleSelect([...options, value]);
    }
  };

  return (
    <li>
      <span>{label}</span>
      <button type="button" onClick={selectOption}>
        {selected ? 'selected' : 'not selected'}
      </button>
    </li>
  );
};

export default MultipleSelectionOption;
