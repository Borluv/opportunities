import type { FC } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { GoDot } from 'react-icons/go';
import styles from './MultipleSelectionOption.module.scss';

interface MultipleSelectionOptionPropTypes {
  selected: boolean;
  label: string;
  value: 'socialMedia' | 'printedSigns' | 'recommendation' | 'advertisement';
  handleSelect: (name: 'socialMedia' | 'printedSigns' | 'recommendation' | 'advertisement') => void;
}

const MultipleSelectionOption: FC<MultipleSelectionOptionPropTypes> = ({ selected, label, value, handleSelect }) => {
  const selectOption = (): void => handleSelect(value);

  return (
    <li onClick={selectOption} className={styles.option}>
      <p>{label}</p>
      <button type="button" title="Check">
        {selected ? <FaCheck /> : <GoDot />}
      </button>
    </li>
  );
};

export default MultipleSelectionOption;
