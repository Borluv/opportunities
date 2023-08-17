import type { FC } from 'react';
import styles from './SingleSelectioOption.module.scss';

interface SingleSelectionOptionPropTypes {
  option: string;
  value: string;
  label: string;
  handleChange: (value: string) => void;
}

const SingleSelectionOption: FC<SingleSelectionOptionPropTypes> = ({ option, value, label, handleChange }) => {
  const selected = option === value;

  const changeValue = (): void => handleChange(option);

  return (
    <button type="button" onClick={changeValue} className={styles.button} disabled={selected}>
      {label}
    </button>
  );
};

export default SingleSelectionOption;
