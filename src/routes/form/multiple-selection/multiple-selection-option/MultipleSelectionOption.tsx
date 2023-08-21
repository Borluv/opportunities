import type { FC } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdAdd } from 'react-icons/md';
import styles from './MultipleSelectionOption.module.scss';

interface MultipleSelectionOptionPropTypes {
  selected: boolean;
  label: string;
  value : 'socialMedia' | 'printedSigns' | 'recommendation' | 'advertisement';
  handleSelect: (name: 'socialMedia' | 'printedSigns' | 'recommendation' | 'advertisement') => void;
}

const MultipleSelectionOption: FC<MultipleSelectionOptionPropTypes> = ({ selected, label, value, handleSelect }) => {
  const selectOption = (): void => handleSelect(value);

  return (
    <li className={styles.option}>
      <p>{label}</p>
      <button type="button" title='Check' onClick={selectOption}>
        {selected ? <FaCheck /> : <MdAdd />}
      </button>
    </li>
  );
};

export default MultipleSelectionOption;
