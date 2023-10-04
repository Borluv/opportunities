import type { ChangeEvent, FC } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdAdd } from 'react-icons/md';
import styles from './selfWrittenOption.module.scss';

interface SelfWrittenOptionPropTypes {
  value: string;
  selected: boolean;
  handleSelect: (value: boolean) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SelfWrittenOption: FC<SelfWrittenOptionPropTypes> = ({ value, selected, handleSelect, handleChange }) => {
  const selectOption = (): void => handleSelect(!selected);
  const selectFromLabel = (): void => {
    if (!selected) handleSelect(!selected);
  };

  return (
    <li onClick={selectFromLabel} className={styles.option}>
      <label htmlFor="other" className={styles.label}>
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
      <button type="button" onClick={selectOption} className={styles.button}>
        {selected ? <FaCheck /> : <MdAdd />}
      </button>
    </li>
  );
};

export default SelfWrittenOption;
