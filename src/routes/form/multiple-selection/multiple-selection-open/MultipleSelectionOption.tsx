import type { FC } from 'react';

interface MultipleSelectionOptionPropTypes {
  selected: boolean;
  label: 'hello' | 'bye';
  handleSelect: (name: 'hello' | 'bye') => void;
}

const MultipleSelectionOption: FC<MultipleSelectionOptionPropTypes> = ({ selected, label, handleSelect }) => {
  const selectOption = (): void => handleSelect(label);

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
